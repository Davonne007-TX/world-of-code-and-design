import { lazy, Suspense } from "react";
const WaxHeader = lazy(() => import("./WaxHeader"));
const WaxHero = lazy(() => import("./WaxHero"));
const Services = lazy(() => import("./Services"));
const OurWax = lazy(() => import("./OurWax"));
const Packages = lazy(() => import("./Packages"));
const OurRating = lazy(() => import("./OurRating"));
const Facts = lazy(() => import("./Facts"));
const GotQuestions = lazy(() => import("./GotQuestions"));

export default function MeltingPot() {
  return (
    <main className="bg-neutral-100 min-h-screen">
      <Suspense
        fallback={
          <div className="min-h-screen text-punch font-3xl text-center font-cut">
            Loading...
          </div>
        }
      >
        <WaxHeader />
        <WaxHero />
        <OurWax />
        <Services />
        <Packages />
        <OurRating />
        <GotQuestions />

        <Facts />
      </Suspense>
    </main>
  );
}
