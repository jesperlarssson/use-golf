import Section from "./Section";
import { Heading, Text } from "./Typography";
import { getUserPasses } from "@/sanity/lib/pricingQueries";
import { defaultUserPasses, type UserPassType } from "@/lib/prices";

export default async function UserPassesSection() {
  // Hämta User Passes från Sanity, fallback till default om det misslyckas
  const sanityPasses = await getUserPasses();
  const userPasses = sanityPasses || defaultUserPasses;
  
  const passLinks: Record<UserPassType, string> = {
    small: "https://book.sweetspot.io/clubs/use-golf/passes/33812e8a-fb1b-4d9f-af85-a2405a918fd5",
    medium: "https://book.sweetspot.io/clubs/use-golf/passes/35aa568d-f3f7-4b43-8b98-f2f05712dc22",
    large: "https://book.sweetspot.io/clubs/use-golf/passes/8f6ead57-a89a-4f59-b434-a004a1397f81",
  };

  return (
    <Section id="spelpott" className="pt-10 pb-6 -mt-10 sm:-mt-18 max-w-screen-2xl mx-auto">
      <div className="space-y-6">
        <Heading as={2}>User Passes</Heading>
        <Text className="max-w-3xl">
          För dig som vill spela ofta under säsongen. Välj nivå efter hur mycket du tror du kommer spela. Du kan ta med gäster utan extra kostnad och allt gäller i 12 månader från inköp. Hör av dig till oss om du vill fakturera till företaget. Se villkor nedan.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(["small", "medium", "large"] as UserPassType[]).map((passType) => {
            const pass = userPasses[passType];
            return (
              <div key={passType} className="border-2 border-[var(--brand-secondary)] bg-[var(--brand-primary)] p-6 flex flex-col gap-6">
                <div className="space-y-4">
                  <h3 className="font-horus text-2xl">{pass.name}</h3>
                  <hr className="border-[var(--brand-secondary)]/40" />
                  <div className="text-4xl font-semibold ">{pass.price.toLocaleString("sv-SE")}&nbsp;kr</div>
                  <div className="text-sm">Spelvärde {pass.playValue.toLocaleString("sv-SE")}&nbsp;kr <span className="opacity-80">({pass.bonusPercent} % bonus)</span></div>
                </div>
                <div>
                  <a
                    href={passLinks[passType]}
                    className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none hover:opacity-90 transition"
                    data-cursor-target
                    data-cursor-padding="10"
                  >
                    Ladda pass
                  </a>
                </div>
                <div>
                  <a href="/medlemsvillkor" className="underline text-sm">Medlemskapsvillkor</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

