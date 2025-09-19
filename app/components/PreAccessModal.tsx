"use client";

import { useEffect, useState, useCallback, useRef } from "react";

type SubmitState = "idle" | "loading" | "success" | "error";

function isValidEmail(email: string): boolean {
  const pattern = /^(?:[a-zA-Z0-9_'^&\/+-])+(?:\.(?:[a-zA-Z0-9_'^&\/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;
  return pattern.test(email);
}

export default function PreAccessCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <button
        data-cursor-target
        data-cursor-padding="6"
        type="button"
        onClick={open}
        className="inline-block mt-12 px-6 py-4 md:px-8 md:py-4 rounded-none font-medium hover:opacity-90 bg-brand-secondary text-brand-primary cursor-pointer"
      >
        Registrera dig för pre-access
      </button>

      {isOpen && <EmailModal onClose={close} />}
    </>
  );
}

function EmailModal({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    if (!isValidEmail(email)) {
      setErrorMessage("Ogiltig e-postadress.");
      return;
    }

    try {
      setSubmitState("loading");
      const res = await fetch("/api/pre-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Något gick fel");
      }

      setSubmitState("success");
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      closeTimerRef.current = window.setTimeout(() => {
        onClose();
      }, 2500);
    } catch (err: unknown) {
      setSubmitState("error");
      const message = err instanceof Error ? err.message : "Tekniskt fel";
      setErrorMessage(message);
    }
  }

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
      <button
        aria-label="Stäng"
        className="absolute inset-0 bg-black/50 backdrop-enter backdrop-blur-xs"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-md bg-brand-secondary text-brand-primary  shadow-xl border-4 border-brand-primary p-6 md:p-8 modal-enter"
      >
        <h2 className="text-2xl md:text-3xl font-horus uppercase">Pre-access</h2>
        <p className="mt-2 text-sm md:text-base opacity-80">
          Get used to it.
        </p>

        <form
          onSubmit={onSubmit}
          className={`mt-6 space-y-4 transition-all duration-500 ${
            submitState === "success" ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm uppercase tracking-wide mb-1">
              Din e-postadress
            </label>
            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" w-full border border-olive-700 bg-white/80 text-foreground px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-blue"
              placeholder="namn@exempel.se"
            />
          </div>

          {errorMessage && (
            <p className="text-accent-orange text-sm" role="alert">
              {errorMessage}
            </p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={submitState === "loading"}
              className="inline-flex items-center justify-center px-5 py-3 bg-brand-primary text-brand-secondary font-medium hover:opacity-90 disabled:opacity-60"
            >
              {submitState === "loading" ? "Skickar…" : "Bekräfta"}
            </button>
           
          </div>
        </form>

        {/* Success-overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500 ${
            submitState === "success" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-live="polite"
        >
          <div className="w-full h-full bg-brand-secondary flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-brand-primary font-horus tracking-wide">
              Du är nu registrerad
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          aria-label="Stäng dialog"
          className="absolute right-3 top-3 p-2 hover:opacity-70"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
