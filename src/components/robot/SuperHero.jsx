export default function SuperHero() {
  return (
    <section className="flex flex-col gap-8 justify-center items-center mt-20 px-6">
      <div className="max-w-xl lg:max-w-2xl text-center">
        <h2 className=" text-4xl md:text-5xl font-orb font-semibold leading-snug text-white drop-shadow-[0_0_10px_#ec4899]">
          The Future of Home Living{" "}
          <span className="bg-pink-500 px-3 py-2 skew-x-8 inline-block text-white">
            is here
          </span>
        </h2>
        <p className="mt-6 text-lg md:text-2xl text-gray-200/90 max-w-xl mx-auto">
          Meet <span className="text-purple-400">SuperRobo,</span> your own
          custom Robot, designed to simplify daily life, one task at a time.
        </p>
      </div>
    </section>
  );
}
