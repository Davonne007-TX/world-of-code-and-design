import Button from "../Button";

export default function ArcadeHero() {
  const arcadeForAdults = "Arcade For Adults";

  const about = `Not your typical arcade. Get a blast from the past and play your
  classic arcade games from childhood. Bring your friends and get ready for the 
  ultimate Time Machine Arcade. `;

  const book = "Book Your Party Today";
  return (
    <section className="flex flex-col justify-center items-center mt-20 ">
      <div className="max-w-sm md:max-w-2xl flex flex-col gap-4">
        <h2 className="text-4xl font-orb text-center font-bold">
          {arcadeForAdults}
        </h2>
        <p className="text-2xl">{about}</p>
        <Button
          btnTxt={book}
          className={"bg-black mx-auto text-xl w-64 text-white rounded p-2"}
        />
      </div>
    </section>
  );
}
