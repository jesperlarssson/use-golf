

import Page from "@/components/ui/Page";
import LandingHero from "@/components/ui/LandingHero";
import NavCards from "@/components/ui/NavCards";
import ScrollVelocity from "@/components/ui/ScrollVelocity";



export default function Home() {
  return (
    <Page variant="landing">
      <div className="relative">
        <LandingHero
          title="USE GOLF"
          heroText="Get used to it"
          videoSrc="/use_hero.mp4"
          videoPoster="/images/wall.png"
          imageSrc="/images/wall.png"
        />

        <div className=" w-full bg-[var(--brand-olive-700)] text-[var(--brand-primary)] border-y-2 border-[var(--brand-secondary)]">
          <ScrollVelocity
            texts={["Vi öppnar snart i hovås - Get used to it"]}
            velocity={30}
            className="px-6 py-3 uppercase tracking-widest text-[var(--brand-primary)]"
            numCopies={8}
            parallaxClassName=""
            scrollerClassName=""
          />
        </div>

        {/* NavCards överlappar upp på hero 
        <div className=" relative z-20 py-20">
          <NavCards
            items={[
              { href: "/bokning", title: "Boka simulator", description: "Boka din tid idag" },
              { href: "/medlemskap", title: "Medlemskap", description: "Junior och seniormedlemskap" },
              { href: "/events", title: "Event & Community", description: "Träningar & ligaspel" },
              
            ]}
          />
        </div>*/}
      </div>
    </Page>
  );
}
