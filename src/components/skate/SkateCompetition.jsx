import SkateHeader from "./SkateHeader";
import Hero from "./Hero";

export default function SkateCompetition() {
  return (
    <main className="bg-[url('/images/skate.jpg')] bg-cover min-h-screen">
      <SkateHeader />
      <Hero />
    </main>
  );
}
