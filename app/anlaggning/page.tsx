import Page from "@/components/ui/Page";
import Section from "@/components/ui/Section";
import { Heading } from "@/components/ui/Typography";

export default function AnlaggningPage() {
  return (
    <Page variant="subpage">
      <Section>
          <Heading as={2}>Anläggning</Heading>
          <ul className="space-y-2 mt-4">
            <li>Yta & kapacitet: ~500–600 kvm, 6–8 bays, lounge 30+ platser</li>
            <li>Utrustning: TrackMan, puttinggreen, hyra klubbor</li>
            <li>Konferens: Rum "{"}namn{"}" , x platser, skärm, Wi-Fi</li>
            <li>Mat & dryck: Serveringstillstånd, lättare rätter/snacks</li>
            <li>Parkering & tillgänglighet: Gratis p-platser, ramp/hiss vid behov</li>
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-black/5 rounded" />
            ))}
          </div>
      </Section>
    </Page>
  );
}


