import Search from "./Search";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-white mt-40 text-xl md:text-4xl lg:text-5xl font-serif font-bold">
      <div className="max-w-xs md:max-w-4xl lg:max-w-4xl bg-slate-800 opacity-75 p-2 md:p-10 rounded-xl">
        <h2>
          Help us Save Humanity <br />
          <div className="mt-2 md:mt-4">
            <span className="">After an</span>
            <span className=" bg-gradient-to-r ml-2  from-orange-400 via-orange-500 to-orange-800 font-orb p-2 ">
              E.L.E
            </span>
          </div>
        </h2>
        <Search />
      </div>
    </section>
  );
}
