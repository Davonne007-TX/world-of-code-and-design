import WaxHeader from "./WaxHeader";
import WaxHero from "./WaxHero";
import Services from "./Services";
import OurWax from "./OurWax";

export default function MeltingPot() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <WaxHeader />
      <WaxHero />
      <OurWax />
      <Services />
    </main>
  );
}
