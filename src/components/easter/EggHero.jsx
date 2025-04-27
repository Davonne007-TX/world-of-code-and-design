import Button from "../Button";
import Image from "../Image";

export default function EggHero() {
  const join = `All Easter eggs have escaped our camp! Help us get them all back at our annual Great Eggscape. Dye your eggs with family and then — all of a sudden — when no one was watching, our eggs escaped! Help us find them in time for our Easter Celebration.`;

  return (
    <section className="relative flex flex-col mt-40 md:flex-row items-center justify-between gap-10 px-8 py-12 md:py-20 bg-gradient-to-r from-pink-300 via-pink-100 to-yellow-50 shadow-lg rounded max-w-xs md:max-w-6xl mx-auto overflow-hidden">
      <div className="flex-1 flex flex-col items-start text-left gap-6 mt-4">
        <h2 className="text-3xl md:text-5xl font-glo font-bold leading-tight drop-shadow-sm">
          The Great{" "}
          <span className="text-pink-700 font-lobster italic">Eggscape</span>
        </h2>
        <p className="text-md md:text-xl font-serif leading-relaxed text-gray-800 max-w-xl drop-shadow-sm">
          {join}
        </p>
        <Button
          btnTxt="Learn More"
          className="bg-white text-pink-500 px-8 py-3 rounded-full text-lg font-semibold shadow hover:bg-pink-100 transition duration-300"
        />
      </div>

      <div className="flex-1 flex justify-center">
        <Image
          image="/images/eggHunt.jpg"
          className="max-w-74 md:max-w-md rounded shadow-lg border-4 border-white"
        />
      </div>
    </section>
  );
}
