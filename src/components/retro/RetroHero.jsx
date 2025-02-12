import ReuseableCard from "../ReuseableCard";
import Button from "../Button";

export default function RetroHero() {
  const retroParagraph = `We provide the classic games you grew up with. From favorite games such as Pong, 
  Sonic, Zelda, Spyro, Razor, Tony Hawk Pro Skater, to Crash. We got it all. Take a blast to the past and play your favorite games
  today. Connect with other gamers and lets remember and honor the past.`;
  return (
    <section className="max-w-lg mt-20 bg-black/40 p-2 ml-8 shadow-md">
      <section className="flex flex-col gap-4">
        <ReuseableCard
          heading={"Love gaming. Always have. Always will."}
          headingStyles={"text-3xl text-white font-retro "}
          paragraphSection={retroParagraph}
          paragraphStyles={"text-white text-2xl font-thin mt-4"}
          btnTxt={"Start Gaming"}
          btnStyles={"p-2 bg-white w-40 rounded font-bold"}
        />
      </section>
    </section>
  );
}
