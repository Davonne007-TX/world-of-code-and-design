import SummerHeader from "./SummerHeader";
import Button from "../Button";

export default function SummerTime() {
  return (
    <section className="relative bg-[url('/images/corona.jpg')] bg-cover bg-center min-h-screen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 opacity-70 mix-blend-multiply"></div>

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen">
        <SummerHeader />

        <div className="text-white p-8 max-w-4xl flex flex-col gap-6 text-left ml-4 mt-40">
          {/* Outer gradient border */}
          <div className="p-[6px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 rounded-3xl shadow-xl w-fit">
            {/* Inner content box */}
            <div className="bg-black/50 backdrop-blur-md p-8 rounded-3xl flex flex-col gap-6">
              <h1 className="text-3xl md:text-4xl font-ram">
                It's Summer Somewhere
              </h1>
              <p className="text-2xl md:text-3xl font-serif max-w-2xl">
                Grab a beer. Be with friends. Sit by the beach and enjoy your
                day. What's going on this Summer?
              </p>
              <Button
                btnTxt="Discover Summer"
                className="bg-yellow-300 p-3 rounded-full font-ram text-xl md:text-2xl w-72 hover:bg-yellow-400 transition"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
