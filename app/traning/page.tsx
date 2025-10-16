import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading, Text } from "@/components/ui/Typography";

export default function TraningPage() {
  const trainers = [
    { name: "{" + "{" + "Tränare 1" + "}" + "}" , bio: "PGA-pro, fokus sving/approach/putt" },
    { name: "{" + "{" + "Tränare 2" + "}" + "}" , bio: "Custom fitting & dataanalys" },
  ];

  return (
    <Page variant="subpage">
      <Section>
          <Heading as={2}>Träning</Heading>
          <Text className="mt-4">Coaching, kurser & custom fitting</Text>
          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            {trainers.map((t) => (
              <div key={t.name} className="border rounded p-4">
                <h2 className="text-xl font-semibold">{t.name}</h2>
                <p className="opacity-70">{t.bio}</p>
                <p className="mt-2 text-sm">Privatlektion xx min – pris kr | Paket 5x | Gruppkurs</p>
                <div className="mt-3 flex gap-3">
                  <a href="#" className="rounded border border-[var(--brand-secondary)] px-4 py-2">Boka lektion</a>
                  <a href="#" className="rounded bg-[var(--brand-secondary)] text-[var(--brand-primary)] px-4 py-2">Kontakta</a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm opacity-70">Metodik/verktyg: TrackMan-data, videoanalys, övningsprogram</p>
      </Section>
    </Page>
  );
}


