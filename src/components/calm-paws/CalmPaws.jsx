import PawHeader from "./PawHeader";
import PawHero from "./PawHero";
import PawMission from "./PawMission";

export default function CalmPaws() {
  return (
    <>
      <section className="bg-[url('./images/dogsFirework.jpg')] bg-cover bg-center min-h-screen sm:bg-[url('./images/dogsFirework.jpg')]">
        <PawHeader />
        <PawHero />
      </section>

      <PawMission />
    </>
  );
}
