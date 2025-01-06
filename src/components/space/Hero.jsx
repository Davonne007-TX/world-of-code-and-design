import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-white mt-40 text-2xl md:text-4xl lg:text-5xl font-serif font-bold">
      <div className="max-w-sm md:max-w-3xl lg:max-w-4xl bg-slate-800 opacity-75 p-8 rounded-xl">
        <h2>
          Help us save Humanity <br />
          <div className="mt-4">
            <span>After an</span>
            <span className=" bg-gradient-to-r from-orange-400 via-orange-500 to-orange-800 font-orb ml-2">
              {" "}
              E.L.E
            </span>
          </div>
        </h2>
      </div>
    </section>
  );
}
