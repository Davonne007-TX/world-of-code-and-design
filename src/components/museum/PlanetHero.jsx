import Card from "../Card";
import Button from "../Button";

export default function PlanetHero() {
  return (
    <section className="mt-20 lg:mt-40 max-w-2xl lg:ml-10">
      <Card
        title={"Curiosity Awaits You"}
        description={`With the technology we have today, we have the chance to explore not only
        our Universe but our near by Universes. With our Exhibits, discover the history of solar
        system and what lies beyond the cosmos. Plan your visit today and lets discover what the universe
        holds.`}
      />
      <section className="flex gap-4 p-4">
        <Button
          btnTxt={"Plan Visit →"}
          className={"bg-black rounded text-white p-2 text-xl"}
        />
        <Button
          btnTxt={"Learn More →"}
          className={"bg-black rounded text-white p-2 text-xl"}
        />
      </section>
    </section>
  );
}
