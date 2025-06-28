import ShredHeader from "./ShredHeader.jsx";
import ShredHero from "./ShredHero.jsx";

export default function GoBig() {
  return (
    <section className="bg-[url('./images/skateClub.jpg')] bg-cover min-h-screen">
      <div>
        <ShredHeader />
        <ShredHero />
      </div>
    </section>
  );
}
