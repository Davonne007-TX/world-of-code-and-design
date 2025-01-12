export default function PlanHero() {
  const disappointed = "you won't be disappointed";
  return (
    <>
      <section className="flex flex-col ml-10 mt-20 lg:mt-40 text-white font-serif">
        <h3 className="text-6xl md:text-7xl lg:text-8xl ">Fly With Us Today</h3>
        <p className="mt-2 text-2xl ml-2">{disappointed}</p>

        <section className="text-black flex flex-col shadow-lg gap-4 bg-white max-w-sm lg:max-w-xl p-4 rounded-xl mt-10">
          <p className="text-2xl">Plan Your Next Trip</p>

          <form className="grid grid-cols-2 gap-4">
            <label className="flex gap-2">
              One Way
              <input type="radio" value="One Way" name="trip-type" />
            </label>

            <label className="flex gap-2">
              Round Trip
              <input type="radio" value="Round Trip" name="trip-type" />
            </label>
            <label>
              <input
                type="text"
                placeholder="From Where"
                name="current-location"
              />
            </label>

            <label>
              <input type="text" placeholder="From To" name="destination" />
            </label>
            <label>
              Departing
              <input type="date" placeholder="Departing" name="departing" />
            </label>

            <label>
              Returning
              <input type="date" placeholder="Returning" name="returning" />
            </label>

            <label>
              <input type="number" placeholder="Bags" name="bag-quality" />
            </label>

            <label>
              <input type="number" placeholder="Adult" name="adult-quality" />
            </label>
          </form>
        </section>
      </section>
    </>
  );
}
