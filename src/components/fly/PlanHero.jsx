import BookNextFlight from "./BookNextFlight";

export default function PlanHero() {
  const disappointed =
    "you won't be disappointed. luxury travel. inexpensive cost";
  return (
    <>
      <section className="flex flex-col  sm:p-6 md:p-10 lg:mt-40 text-white font-serif p-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col mt-10">
            <h3 className="text-6xl md:text-7xl lg:text-8xl ">
              Fly With Us Today
            </h3>
            <p className="mt-2 text-3xl ml-2 p-2 bg-transparent max-w-md shadow-xl">
              {disappointed}
            </p>
          </div>
          <section className="text-black flex flex-col shadow-lg gap-4 bg-white p-4 rounded-xl mt-10 md:mt-20">
            <p className="text-3xl">Plan Your Next Trip</p>
            <BookNextFlight />
          </section>
        </div>
      </section>
    </>
  );
}
