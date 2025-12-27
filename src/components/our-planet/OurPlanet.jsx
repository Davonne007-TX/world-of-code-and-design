import PlanetNav from "./PlanetNav";
import Facts from "./Facts";

export default function OurPlanet() {
  return (
    <main>
      <PlanetNav />
      <div className="relative bg-[url('/images/earth.webp')] bg-cover bg-center min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        <div className="relative z-50 flex flex-col text-center justify-center items-center min-h-screen">
          <div className=" flex flex-col justify-center items-center text-center space-y-6 mt-38">
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
            <p className="text-gray-200 text-center max-w-xl md:text-xl bg-black/10 shadow-md p-2">
              At the moment, we only have one planet. One home. One Earth. It is
              up to us to take care of it and put a stop to our climate crisis.
              The time for change is now.{" "}
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <button className="bg-blue-400 p-3 w-60 text-lg  text-white">
                Ready to take action ➡️
              </button>
              <button className="bg-black/40 border-2 text-lg border-blue-400 p-3 text-white">
                Check out the data 📊
              </button>
            </div>
            <Facts />
          </div>
        </div>
      </div>
    </main>
  );
}
