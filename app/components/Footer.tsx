import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--brand-secondary)]/30 bg-[var(--brand-primary)]">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="font-horus text-lg mb-3">USE GOLF</h3>
          <p className="text-sm">Indoor golf & lifestyle</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} USE GOLF</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Kontakt</h4>
          <p className="text-sm">Exempelgatan 1</p>
          <p className="text-sm">123 45 Stad</p>
          <p className="text-sm mt-2">hello@usegolf.se</p>
          <p className="text-sm">+46 (0)70-000 00 00</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Snabblänkar</h4>
          <ul className="text-sm space-y-2">
            <li><Link href="/oppettider-kontakt">Öppettider & kontakt</Link></li>
            <li><Link href="/priser-presentkort">Priser & presentkort</Link></li>
            <li><Link href="/friskvard">Friskvårdsbidrag</Link></li>
            <li><Link href="/om">Om USE GOLF</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Social</h4>
          <div className="flex gap-3 text-sm">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


