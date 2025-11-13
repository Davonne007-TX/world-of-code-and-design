export default function WaxHero() {
  return (
    <section className="mx-auto w-full max-w-sm md:max-w-2xl lg:max-w-5xl m-20 md:mt-10">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-4xl md:text-6xl">
            Wax on. Wax off. <br />
            Hair Gone.{" "}
          </h2>
          <p className="text-xl">
            orem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pellentesque ultrices dui, eget tristique lectus aliquet eu. Quisque
            ultricies bibendum accumsan. Maecenas bibendum ligula est, a.{" "}
          </p>

          <div className="flex gap-8">
            <button className="p-2 rounded-lg w-60 bg-char text-white font-bold cursor-pointer">
              Our Special Wax
            </button>
            <button className="p-2 rounded-lg w-60 bg-char text-white font-bold cursor-pointer ">
              View Services
            </button>
          </div>
        </div>
        <img
          src="/images/waxing.jpg"
          className="max-w-xs md:max-w-md rounded-3xl mx-auto shadow-2xl border-4 border-pink-300"
        />
      </div>
    </section>
  );
}
