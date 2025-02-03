import Card from "../Card";
import Button from "../Button";
import NewExhibits from "./NewExhibits";

export default function PlanetHero() {
  const latestExhibits = "Check out our latest exhibits!";
  return (
    <section className="w-full lg:ml-10 flex flex-col justify-center items-center lg:flex-row gap-8">
      <section className="flex flex-col max-w-lg ">
        <Card
          title={"Curiosity Among The Stars"}
          className={"font-cut"}
          description={`With the technology we have today, we have the chance to explore not only
          our Universe but our near by Universes. With our Exhibits, discover the history of solar
          system and what lies beyond the cosmos. Plan your visit today and lets discover what the universe
          holds.`}
        />
        <p className="text-2xl ml-3">{latestExhibits}</p>
        <section className="flex gap-4 p-4">
          <Button
            btnTxt={"Plan Visit →"}
            className={
              "bg-black font-cut rounded hover:scale-110 text-white p-2 text-xl"
            }
          />
          <Button
            btnTxt={"Get Tickets →"}
            className={
              "bg-black font-cut rounded hover:scale-110 text-white p-2 text-xl"
            }
          />
        </section>
      </section>
      <section className=" flex justify-center items-center flex-wrap gap-2 mb-20 ">
        <NewExhibits />
      </section>
    </section>
  );
}
