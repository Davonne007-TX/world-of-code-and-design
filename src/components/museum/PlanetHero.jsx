import Card from "../Card";
import Button from "../Button";
import NewExhibits from "./NewExhibits";

export default function PlanetHero() {
  const latestExhibits = "Check out our latest exhibits!";
  return (
    <section className=" max-w-8xl flex flex-col justify-center items-center lg:flex-row gap-10 mt-20 lg:-mt-20">
      <div className="flex flex-col max-w-xs md:max-w-lg">
        <Card
          title={"Curiosity Among The Stars"}
          className={"font-cut"}
          description={`With the technology we have today, we have the chance to explore not only
          our Universe but our near by Universes. With our Exhibits, discover the history of solar
          system and what lies beyond the cosmos. Plan your visit today and lets discover what the universe
          holds.`}
        />
        <p className="text-2xl mt-4">{latestExhibits}</p>
        <div className="flex gap-4 mt-4">
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
        </div>
      </div>
      <section className=" flex justify-center items-center flex-wrap gap-2 ">
        <NewExhibits />
      </section>
    </section>
  );
}
