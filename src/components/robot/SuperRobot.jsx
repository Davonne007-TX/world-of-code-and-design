import SuperHeader from "./SuperHeader";
import SuperHero from "./SuperHero";

export default function SuperRobot() {
  return (
    <main className="bg-[url('./images/superRobot.jpg')] bg-cover bg-center min-h-screen text-white">
      <SuperHeader />
      <SuperHero />
    </main>
  );
}
