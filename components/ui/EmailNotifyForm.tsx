"use client";
import { useState } from "react";

export default function EmailNotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const isValidEmail = (value: string) => {
    return /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/.test(value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!isValidEmail(email)) {
      setError("Ogiltig e-postadress");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/pre-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({} as any));
        throw new Error(data?.error || "Kunde inte spara e-post");
      }
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Något gick fel");
    }
  };

  if (status === "success") {
    return (
      <div className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6">
        <p>Tack! Vi hör av oss när portalen öppnar.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
      <div>
        <label className="block text-sm mb-1">E-post</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] px-3 py-2 rounded-none"
          placeholder="namn@exempel.se"
          required
          disabled={status === "loading"}
        />
        {error ? <p className="text-sm mt-2 text-red-600">{error}</p> : null}
      </div>
      <div className="self-end">
        <button
          type="submit"
          className="inline-flex items-center justify-center bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-6 py-3 font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Skickar..." : "Meddela mig"}
        </button>
      </div>
    </form>
  );
}


