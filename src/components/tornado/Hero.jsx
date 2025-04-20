import Image from "../Image";
// import Button from "../Button";
import Location from "./Location";

export default function Hero() {
  const text = `Severe weather strikes when you least 
  expect it. That's why we, here at Stay Alert Storm 
  Chasing, are on a mission to give you alerts on 
  Tornado Warnings and Severe Weather. Stay up to date,
  be prepared, get help.`;

  return (
    <section className="flex items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-12">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-12 mb-40">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight mb-6">
            Here For You When The Storm{" "}
            <span className="text-red-500">Comes</span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 mb-8">
            {text}
          </p>

          <Location />
          {/* <Button
            btnTxt="Check Weather Alerts"
            className="bg-red-500 hover:bg-red-600 transition duration-300 p-2 text-white font-bold text-lg rounded-full w-80 shadow-lg"
          /> */}
        </div>

        <div className="flex-1">
          <Image
            image="/images/tornado.jpg"
            className="rounded-3xl p-2 max-w-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
