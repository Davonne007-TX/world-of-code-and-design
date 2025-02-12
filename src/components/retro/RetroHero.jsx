import Image from "../Image";

export default function RetroHero() {
  const disneyArcade = "./images/nintendo.jpg";
  return (
    <section>
      <Image image={disneyArcade} className="max-w-4xl" />
    </section>
  );
}
