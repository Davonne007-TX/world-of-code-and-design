import Button from "../Button";

export default function SummerTime() {
  return (
    <section className="relative bg-[url('/images/corona.jpg')] bg-cover bg-center min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 opacity-70 mix-blend-multiply"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-white shadow-xl p-8 rounded-lg max-w-4xl flex flex-col gap-6 text-center">
          <h1 className="text-4xl md:text-6xl font-ram">
            It's Summer Somewhere
          </h1>
          <p className="text-2xl md:text-3xl font-serif max-w-2xl mx-auto">
            Grab a beer. Sit by the beach and enjoy your day.
          </p>
          <Button
            btnTxt="Discover Summer"
            className="bg-yellow-300 p-3 rounded-full font-ram text-2xl mx-auto hover:bg-yellow-400 transition"
          />
        </div>
      </div>
    </section>
  );
}
