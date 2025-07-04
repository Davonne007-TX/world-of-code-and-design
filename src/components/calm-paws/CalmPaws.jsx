import Awareness from "./Awareness";
import PawHeader from "./PawHeader";
import PawHero from "./PawHero";

export default function CalmPaws() {
  return (
    <>
      <PawHeader />
      <section className="bg-[url('./images/dogsFirework.jpg')] bg-cover bg-center min-h-screen">
        <PawHero />
      </section>
      <Awareness />
    </>
  );
}
