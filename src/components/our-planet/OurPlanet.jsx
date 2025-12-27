import PlanetNav from "./PlanetNav";

export default function OurPlanet() {
  return (
    <main>
      <PlanetNav />
      <div className="relative bg-[url('/images/earth.webp')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        <div className="relative z-50 flex flex-col justify-center items-center min-h-screen">
          <div className="text-center space-y-6 mt-32">
            <button className="bg-black/80 border-1 border-blue-400 p-4 text-blue-300 ">
              CLIMATE EMERGENCY
            </button>

            <h2 className=" text-white text-center text-4xl font-bold md:text-8xl">
              Our Planet.
              <br />
              <span className="text-blue-500 md:ml-20 text-center">
                Our Responsibility.
              </span>
            </h2>
            <p className="text-gray-200 mx-auto text-center max-w-xl md:text-xl bg-black/10 shadow-md p-2">
              At the moment, we only have one planet. One home. One Earth. It is
              up to us to take care of it and put a stop to our climate crisis.
              The time for change is now.{" "}
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <button className="bg-blue-400 p-3 w-60  text-white">
                Ready to take action ➡️
              </button>
              <button className="bg-black/40 border-2 border-blue-400 p-3 text-white">
                Check out the data 📊
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-5xl mx-auto mt-10">
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className="text-4xl font-serif text-blue-400 font-bold">
                1.48°C
              </p>
              <p className="text-white max-w-3xs text-md  text-center">
                Global temperature rise since pre-industrial times{" "}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className="text-5xl font-serif text-blue-400 font-bold">89%</p>
              <p className="text-white max-w-3xs text-md  text-center">
                Above average temperature in the Atlantic Ocean
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className="text-5xl font-serif text-blue-400 font-bold">30%</p>
              <p className="text-white max-w-3xs text-md  text-center">
                Increase in our oceans acidity due to absorbing heat
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
