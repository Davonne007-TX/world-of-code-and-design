import EatHero from "./EatHero";
import EatNowHeader from "./EatNowHeader";

export default function EatNow() {
  return (
    <main className="bg-[url('/images/eat.jpg')]  bg-cover bg-center bg-no-repeat min-h-screen">
      <EatNowHeader />
      <EatHero />
    </main>
  );
}
