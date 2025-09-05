import AimHighHero from "./AimHighHero";
import TopHeaderAimHigh from "./TopHeaderAimHigh";

export default function AimHigh() {
  return (
    <main className="bg-[url('./images/basketball.jpg')] bg-cover min-h-screen bg-center">
      <section>
        <TopHeaderAimHigh />
        <AimHighHero />
      </section>
    </main>
  );
}
