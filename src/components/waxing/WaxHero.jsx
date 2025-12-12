import Info from "./Info";
export default function WaxHero() {
  return (
    <section className="mx-auto w-full max-w-xs md:max-w-2xl lg:max-w-5xl mt-10" id="">
      <div className="flex flex-col lg:flex-row gap-20 ">
        <div className="flex flex-col gap-8">
          <h2 className="font-bold font-glo text-4xl md:text-6xl my-8">
            Wax on. Wax off. <br />
            Hair Gone.{" "}
          </h2>
          <a className="rounded-full p-2 w-60 font-bold text-white bg-candy">
            Exclusive Waxing Services ✨{" "}
          </a>
          <p className="text-xl">
            Hairy Legs? Want your eyebrows flawless? We got you! With our wax
            you won't need to wax again till 4 weeks! Kiss your hair goodbye.
            Our custom wax is made just for us and our guests. Enjoy your me
            time and get Silky Smooth!
          </p>

          <div className="flex flex-col md:flex-row font-thin gap-8">
            <button className="p-2 rounded w-60 text-2xl bg-char text-white cursor-pointer">
              Our Special Wax
            </button>
            <button className="p-2 rounded w-60 bg-char text-white text-2xl cursor-pointer ">
              View Services
            </button>
          </div>
          <Info />
        </div>
        <img
          src="/images/waxing.jpg"
          className="max-w-xs md:max-w-md rounded-3xl mx-auto shadow-2xl"
        />
      </div>
    </section>
  );
}
