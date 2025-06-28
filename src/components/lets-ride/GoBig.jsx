import GoBigHeader from "./GoBigHeader.jsx";
import ShredHero from "./ShredHero.jsx";

export default function GoBig() {
  return (
    <section className="bg-[url('./images/skate2.jpg')] bg-cover bg-center min-h-screen sm:bg-[url('./images/skate2.jpg')]">
      <div className="min-h-screen">
        <GoBigHeader />
        <ShredHero />
      </div>
    </section>
  );
}
