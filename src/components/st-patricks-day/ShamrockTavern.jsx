import TavernHeader from "./TavernHeader";
import TavernHero from "./TavernHero";
import TavernImages from "./TavernImages";

export default function ShamrockTavern() {
  const hour = "Every Hour Is Happy Hour Here";
  const memories = `Good friends, great drinks, great food, and the perfect tunes—what
   more do you need? Whether you are here for a casual pint or a full night
   of laughs and live music, we got the vibe that keeps the good times rolling.
   Grab a seat, raise a glass, and lets make some memories!`;
  return (
    <main className="flex flex-col justify-center items-center">
      <TavernHeader />

      <TavernHero heroTitle={hour} heroDescription={memories} />
      <TavernImages />
    </main>
  );
}
