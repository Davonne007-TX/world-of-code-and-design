import SuperHeader from "./SuperHeader";
import SuperHero from "./SuperHero";
// import Trusted from "./Trusted";

export default function SuperRobot() {
  return (
    <main className="bg-[url('./images/superRobot.jpg')] bg-cover bg-center sm:bg-top md:bg-center min-h-screen text-white">
      <SuperHeader />
      <SuperHero />
      {/* <Trusted /> */}
    </main>
  );
}
