import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

export default function KontaktPage() {
  return (
    <Page variant="subpage">
      <Section className="pt-16 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              <Heading as={2}>Kontakt</Heading>
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 space-y-3">
                <Text className="font-semibold">Vi öppnar snart</Text>
                <Text>Öppettider uppdateras inom kort.</Text>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2" action={`mailto:hello@usegolf.se`} method="post">
                  <div className="sm:col-span-2">
                    <label className="block text-sm mb-1">Namn</label>
                    <input className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" required />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">E-post</label>
                    <input type="email" className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" required />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Telefon</label>
                    <input className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm mb-1">Meddelande</label>
                    <textarea className="w-full min-h-28 border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none" />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition">
                      Skicka
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <aside className="space-y-3">
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
                <h3 className="font-horus text-2xl mb-2">Besök oss</h3>
                <Text>Krogabäcksvägen 2</Text>
                <Text>436 53 Hovås</Text>
              </div>
              <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
                <h3 className="font-horus text-2xl mb-2">Kontakt</h3>
                <Text>hello@usegolf.se</Text>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </Page>
  );
}



