import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-white mt-40 text-xl md:text-4xl lg:text-5xl font-serif font-bold">
      <div className="max-w-xs md:max-w-4xl lg:max-w-4xl bg-slate-800 opacity-75 p-2 md:p-8 rounded-xl">
        <h2>
          Help us Save Humanity <br />
          <div className="mt-2 md:mt-4">
            <span>After an</span>
            <span className=" bg-gradient-to-r from-orange-400 via-orange-500 to-orange-800 font-orb ml-2">
              {" "}
              E.L.E
            </span>
          </div>
        </h2>

        <p className="font-thin mt-4 lg:mt-8 text-md lg:text-2xl">
          Combing our forces to bring together a group of individuals who care
          about humanity's survival of the apocalypse. Bring your family and
          friends and lets surive the end together.
        </p>
      </div>
    </section>
  );
}
