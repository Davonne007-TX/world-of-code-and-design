import PlanHero from "./PlanHero";
import TopHeader from "./TopHeader";

export default function LandingPage() {
  return (
    <>
      <section className="bg-[url('images/fly.jpg')] bg-cover min-h-screen">
        <TopHeader />
        <PlanHero />
      </section>
    </>
  );
}
