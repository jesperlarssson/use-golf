import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/ui/Logo";
import SocialButtons from "@/components/ui/SocialButtons";

export default function Footer() {
  return (
    <footer className=" border-t border-[var(--brand-secondary)]/30 bg-[var(--brand-primary)] py-20 text-[var(--brand-secondary)]">

      {/** LOGO + SOCIAL centered, med info på sidorna i en tredelad layout */}
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Vänster: Företagsinfo */}
        <div className="hidden md:block justify-self-start">
          <h3 className="font-horus text-lg mb-3">USE GOLF</h3>
          <p className="text-sm">Indoor golf & lifestyle</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} USE GOLF</p>
        </div>

        {/* Mitten: Logo + social */}
        <div className="flex flex-col items-center gap-6">
          <Logo width={120} height={120} className="text-[var(--brand-secondary)]" />
          <SocialButtons
            size={44}
            links={{
              instagram: "https://instagram.com/use__golf",
              facebook: "https://www.facebook.com/profile.php?id=61581723324567",
            }}
          />
        </div>

        {/* Höger: Kontakt */}
        <div className="hidden md:block justify-self-end text-right">
          <h4 className="font-semibold mb-3">Kontakt</h4>
          <p className="text-sm">Krogabäcksvägen 2</p>
          <p className="text-sm">436 53 Hovås</p>
          <p className="text-sm mt-2">hello@usegolf.se</p>

        </div>
      </div>

      {/* Mobil: staplade info-sektioner */}
      <div className="mx-auto max-w-6xl px-4 pb-12 grid gap-8 md:hidden">
        <div>
          <h3 className="font-horus text-lg mb-3">USE GOLF</h3>
          <p className="text-sm">Indoor golf & lifestyle</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} USE GOLF</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Kontakt</h4>
          <p className="text-sm">Krogabäcksvägen 2</p>
          <p className="text-sm">436 53 Hovås</p>
          <p className="text-sm mt-2">hello@usegolf.se</p>
         
        </div>
      </div>
    </footer>
  );
}


