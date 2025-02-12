import RetroHeader from "./RetroHeader";
import RetroHero from "./RetroHero";

export default function RetroComputer() {
  return (
    <>
      <main className="bg-[url('/images/nintendo.jpg')] bg-cover min-h-screen">
        <RetroHeader />
        <RetroHero />
      </main>
    </>
  );
}
