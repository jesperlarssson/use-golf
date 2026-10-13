// Run: node --test tests/corporate-inquiry.test.cjs
// Exercise the actual route with a stub email transport; no email is sent.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");

function loadTs(file, requireModule, extra = {}) {
  const source = ts.transpileModule(readFileSync(file, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
  }).outputText;
  const module = { exports: {} };
  vm.runInNewContext(source, {
    exports: module.exports,
    module,
    require: requireModule,
    ...extra,
  });
  return module.exports;
}

function setup() {
  const sent = [];
  const route = loadTs(
    "app/api/inquiry/route.ts",
    (name) => {
      if (name === "next/server")
        return {
          NextResponse: {
            json: (body, init) => ({ status: init?.status ?? 200, body }),
          },
        };
      if (name === "@getbrevo/brevo")
        return {
          TransactionalEmailsApi: class {
            setApiKey() {}
            async sendTransacEmail(mail) {
              sent.push(mail);
            }
          },
          TransactionalEmailsApiApiKeys: { apiKey: 0 },
        };
      throw new Error(`Unexpected dependency: ${name}`);
    },
    { process: { env: { BREVO_API_KEY: "test-stub-only" } } },
  );
  const send = (body) =>
    route.POST({
      headers: new Headers({ "content-type": "application/json" }),
      json: async () => body,
    });
  return { sent, send };
}
const contact = {
  company: "Testbolag",
  name: "Testperson",
  email: "test@example.com",
  phone: "0700000000",
};
const event = {
  ...contact,
  type: "event",
  packageName: "Corporate Golf Night",
  guests: 20,
  date: "2026-12-10",
  start: "18:00",
};

test("event request carries package, guests, chosen date and calculated summary to email", async () => {
  const { sent, send } = setup();
  const { corporateEventSummary } = loadTs("lib/corporateOffers.ts");
  const message = corporateEventSummary({
    date: event.date,
    start: event.start,
    hours: 4,
    guests: 20,
    extras: ["Mat", "Dryck"],
  });
  assert.match(message, /Extra tid: 1 timme, pris enligt offert/);
  assert.match(message, /Låneklubbor ingår alltid/);
  assert.doesNotMatch(message, /Klubbhyra/);
  const result = await send({ ...event, message });
  assert.equal(result.status, 200);
  assert.equal(sent.length, 1);
  for (const text of [
    "Corporate Golf Night",
    "2026-12-10",
    "20",
    "18:00",
    "Mat, Dryck",
    "exkl. moms",
  ])
    assert.ok(sent[0].htmlContent.includes(text));
});

test("undecided event date must be explicit and is included in email", async () => {
  const { sent, send } = setup();
  assert.equal((await send({ ...event, date: "" })).status, 400);
  assert.equal(
    (await send({ ...event, date: "", dateFlexible: true })).status,
    200,
  );
  assert.match(sent[0].htmlContent, /Inte bestämt/);
});

test("partner can enquire without event fields or phone", async () => {
  const { sent, send } = setup();
  assert.equal(
    (
      await send({
        company: contact.company,
        name: contact.name,
        email: contact.email,
        type: "partner",
        packageName: "Business Partner",
      })
    ).status,
    200,
  );
  assert.match(sent[0].htmlContent, /Business Partner/);
  assert.doesNotMatch(sent[0].htmlContent, /Antal personer|Önskat datum/);
});

test("invalid dates, fractional participants and missing event phone do not send email", async () => {
  const { sent, send } = setup();
  for (const patch of [
    { date: "2026-02-30" },
    { date: "not-a-date", dateFlexible: true },
    { guests: 0 },
    { guests: 2.5 },
    { phone: "" },
  ]) {
    assert.equal((await send({ ...event, ...patch })).status, 400);
  }
  assert.equal(sent.length, 0);
});

test("package and free text are escaped in the email", async () => {
  const { sent, send } = setup();
  await send({
    ...event,
    packageName: "<script>bad</script>",
    message: "<img src=x>\nSecond line",
  });
  assert.doesNotMatch(sent[0].htmlContent, /<script>|<img/);
  assert.match(sent[0].htmlContent, /&lt;script&gt;/);
  assert.match(sent[0].htmlContent, /<br\/>Second line/);
});

test("mail service failure returns an error, never a success response", async () => {
  const route = loadTs(
    "app/api/inquiry/route.ts",
    (name) =>
      name === "next/server"
        ? {
            NextResponse: {
              json: (body, init) => ({ status: init?.status ?? 200, body }),
            },
          }
        : {
            TransactionalEmailsApi: class {
              setApiKey() {}
              async sendTransacEmail() {
                throw new Error("Transport unavailable");
              }
            },
            TransactionalEmailsApiApiKeys: { apiKey: 0 },
          },
    { process: { env: { BREVO_API_KEY: "test-stub-only" } } },
  );
  const result = await route.POST({
    headers: new Headers({ "content-type": "application/json" }),
    json: async () => event,
  });
  assert.equal(result.status, 500);
  assert.equal(result.body.ok, false);
});
