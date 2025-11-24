import { lazy, Suspense } from "react";
import { useRef } from "react";

const WaxHeader = lazy(() => import("./WaxHeader"));
const WaxHero = lazy(() => import("./WaxHero"));
const Services = lazy(() => import("./Services"));
const OurWax = lazy(() => import("./OurWax"));
const Packages = lazy(() => import("./Packages"));
const OurRating = lazy(() => import("./OurRating"));
const Facts = lazy(() => import("./Facts"));
const GotQuestions = lazy(() => import("./GotQuestions"));
const Birthday = lazy(() => import("./Birthday"));
const SmoothFooter = lazy(() => import("./SmoothFooter"));

export default function MeltingPot() {
  const homeSection = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div ref={homeSection}></div>

      <Suspense fallback={<div>Loading...</div>}>
        <WaxHeader scrollToSection={scrollToSection} targetRef={homeSection} />
        <WaxHero />
        <OurWax />
        <Services />
        <Packages />
        <OurRating />
        <GotQuestions />
        <Facts />
        <Birthday />
        <SmoothFooter scrollToSection={scrollToSection} refs={homeSection} />
      </Suspense>
    </main>
  );
}
