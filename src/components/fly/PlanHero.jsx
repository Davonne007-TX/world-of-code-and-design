import BookNextFlight from "./BookNextFlight";

export default function PlanHero() {
  const disappointed =
    "you won't be disappointed. luxury travel. inexpensive cost";
  return (
    <>
      <section className="flex flex-col ml-10 mt-20 lg:mt-40 text-white font-serif">
        <h3 className="text-6xl md:text-7xl lg:text-8xl ">Fly With Us Today</h3>
        <p className="mt-2 text-2xl ml-2">{disappointed}</p>

        <section className="text-black flex flex-col shadow-lg gap-4 bg-white max-w-xs md:max-w-sm lg:max-w-xl p-4 rounded-xl mt-10">
          <p className="text-2xl">Plan Your Next Trip</p>

          <BookNextFlight />
        </section>
      </section>
    </>
  );
}
