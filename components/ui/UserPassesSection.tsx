import Section from "./Section";
import { Heading, Text } from "./Typography";
import { userPasses, type UserPassType } from "@/lib/prices";

export default function UserPassesSection() {
  return (
    <Section id="spelpott" className="pt-10 pb-6 -mt-10 sm:-mt-18">
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
                  <span role="link" aria-disabled="true" tabIndex={-1} className="inline-flex w-full items-center justify-center bg-[var(--brand-secondary)] px-5 py-3 text-[var(--brand-primary)] font-semibold uppercase tracking-wider rounded-none opacity-60 cursor-not-allowed pointer-events-none transition" data-cursor-target data-cursor-padding="10">SNART TILLGÄNGLIGT</span>
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

