export default function SuperHero() {
  return (
    <section className="flex flex-col gap-8 justify-center items-center mt-20 px-6">
      <div className="max-w-xl lg:max-w-2xl text-center">
        <button className="bg-neutral-200 font-semibold text-pink-400 rounded-full text-lg tracking-widest px-6 mb-4 p-2">
          AI Powered Robot
        </button>
        <h2 className=" text-4xl md:text-5xl font-orb font-semibold leading-snug text-white drop-shadow-[0_0_10px_#ec4899]">
          The Future of Home Living{" "}
          <span className="bg-pink-400 px-3 py-2 skew-x-8 inline-block text-white">
            is here
          </span>
        </h2>
        <p className="mt-4 text-lg md:text-2xl text-gray-200/90 max-w-xl mx-auto">
          Meet <span className="font-bold text-pink-500">SuperRobo,</span> your
          own custom Robot, designed to simplify daily life, one task at a time.
        </p>

        <button className="mt-8  bg-gradient-to-b from-black via-[#1a1a1a] to-black font-orb text-xl cursor-pointer w-80 p-2 rounded">
          Learn More →
        </button>
      </div>
    </section>
  );
}
