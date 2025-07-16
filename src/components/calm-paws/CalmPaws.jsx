import { useRef } from "react";

import Awareness from "./Awareness";
import GetInvolved from "./GetInvolved";
import PawFooter from "./PawFooter";
import PawHeader from "./PawHeader";
import PawHero from "./PawHero";
import PawStories from "./PawStories";
import Resources from "./Resources";

export default function CalmPaws() {
  const heroRef = useRef(null);
  const awarenessRef = useRef(null);
  const storiesRef = useRef(null);
  const resourcesRef = useRef(null);
  const involvedRef = useRef(null);

  const handleNavClick = (idx) => {
    const refs = [heroRef, awarenessRef, storiesRef, resourcesRef, involvedRef];
    refs[idx]?.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <PawHeader onNavClick={handleNavClick} />
      <section
        ref={heroRef}
        className="bg-[url('./images/dogsFirework.jpg')] bg-cover bg-center min-h-screen"
      >
        <PawHero />
      </section>
      <section ref={awarenessRef}>
        <Awareness />
      </section>
      <section ref={storiesRef}>
        <PawStories />
      </section>
      <section ref={resourcesRef}>
        <Resources />
      </section>
      <section ref={involvedRef}>
        <GetInvolved />
      </section>
      <PawFooter />
    </>
  );
}
