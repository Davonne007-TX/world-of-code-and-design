import Button from "../Button";
import Image from "../Image";

export default function EggHero() {
  const join = `All Easter eggs have escaped our camp! Help us get them all back at our annual Great Eggscape. Dye your eggs with family and then — all of a sudden — when no one was watching, our eggs escaped! Help us find them in time for our Easter Celebration.`;

  return (
    <section className="relative flex flex-col mt-20 md:flex-row items-center justify-between gap-10 px-8 py-12 md:py-20 bg-gradient-to-r from-pink-300 via-pink-100 to-yellow-50 shadow-lg rounded-3xl max-w-xs md:max-w-6xl mx-auto overflow-hidden">
      <div className="flex-1 flex flex-col items-start text-left gap-6">
        <h2 className="text-4xl md:text-6xl font-glo font-bold leading-tight drop-shadow-sm">
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
          className="max-w-xs md:max-w-md lg:max-w-lg rounded-full shadow-lg border-4 border-white"
        />
      </div>
    </section>
  );
}
