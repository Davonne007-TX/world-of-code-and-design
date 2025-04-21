import Button from "../Button";

export default function EggHero() {
  const join = `All Easter eggs have escaped our camp! Help us get them all back at our annual Great Eggscape. Dye your eggs with family and then — all of a sudden — when no one was watching, our eggs escaped! Help us find them in time for our Easter Celebration.`;

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-4 mt-20 text-white bg-linear-65 shadow-md from-pink-400 to-pink-200 rounded-3xl  max-w-4xl mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0 rounded" />
      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl">
        <h2 className="text-5xl font-glo font-bold leading-tight drop-shadow-lg">
          The Great <span className="text-pink-200 font-lobster">Eggscape</span>
        </h2>
        <p className="text-lg md:text-xl font-serif leading-relaxed drop-shadow-md">
          {join}
        </p>
        <Button
          btnTxt="Learn More"
          className="bg-white text-pink-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-100 transition duration-300"
        />
      </div>
    </section>
  );
}
