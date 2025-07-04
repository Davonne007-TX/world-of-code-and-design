import Awareness from "./Awareness";
import PawFooter from "./PawFooter";
import PawHeader from "./PawHeader";
import PawHero from "./PawHero";
import PawStories from "./PawStories";

export default function CalmPaws() {
  return (
    <>
      <PawHeader />
      <section className="bg-[url('./images/dogsFirework.jpg')] bg-cover bg-center min-h-screen">
        <PawHero />
      </section>
      <Awareness />
      <PawStories />
      <PawFooter />
    </>
  );
}
