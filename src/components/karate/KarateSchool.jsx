import KarateHeader from "./KarateHeader";
import KarateHero from "./KarateHero";

export default function KarateSchool() {
  return (
    <>
      <main className="bg-[url('./images/karate.jpg')] bg-cover min-h-screen">
        <KarateHeader />
        <KarateHero />
      </main>
    </>
  );
}
