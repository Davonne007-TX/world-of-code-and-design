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
    <section className="flex items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-4 sm:px-6 py-12">
      <div className="mx-auto max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 lg:-mt-40">
        <div className="w-full text-center lg:text-left">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-5xl leading-tight mb-4 sm:mb-6">
            Here For You When The Storm{" "}
            <span className="text-red-500">Comes</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-2xl max-w-md sm:max-w-xl md:max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8">
            {text}
          </p>

          <Location />
          {/* <Button
            btnTxt="Check Weather Alerts"
            className="bg-red-500 hover:bg-red-600 transition duration-300 p-2 text-white font-bold text-lg rounded-full w-80 shadow-lg"
          /> */}
        </div>

        <div className="">
          <Image
            image="/images/tornado.jpg"
            className="rounded-3xl p-2 max-w-xs md:max-w-xl  lg:max-w-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
