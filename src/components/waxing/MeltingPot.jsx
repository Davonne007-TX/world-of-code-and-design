import WaxHeader from "./WaxHeader";
import WaxHero from "./WaxHero";
import Services from "./Services";

export default function MeltingPot() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <WaxHeader />
      <WaxHero />
      <Services />
    </main>
  );
}
