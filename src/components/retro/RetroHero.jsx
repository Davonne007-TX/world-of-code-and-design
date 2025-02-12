import ReuseableCard from "../ReuseableCard";

export default function RetroHero() {
  const retroParagraph = `We provide the classic games you grew up with. From Nintendo Games Pong, 
  Sonic, Zelda, Spyro, to Crash. We got it all.`;
  return (
    <section className="max-w-lg mt-20 bg-black/40 p-2 ml-20">
      <ReuseableCard
        heading={"Love gaming. Always have. Always will."}
        headingStyles={"text-3xl text-white font-retro "}
        paragraphSection={retroParagraph}
        paragraphStyles={"text-white text-2xl font-thin mt-4"}
        btnTxt={"Start Gaming"}
        btnStyles={"p-2 bg-white w-40 rounded font-bold"}
      />
    </section>
  );
}
