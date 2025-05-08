export default function SummerTime() {
  return (
    <section className="relative bg-[url('/images/corona.jpg')] bg-cover bg-center min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 opacity-70 mix-blend-multiply"></div>
      <div className="relative z-10 max-w-4xl text-white flex flex-col ">
        <div className="mt-60 ml-20 shadow-md p-4">
          <h1 className="text-4xl md:text-6xl font-ram">
            Its Summer Somewhere
          </h1>
          <p className="text-3xl font-serif mt-4 max-w-2xl ">
            Grab a beer. Sit by the beach and enjoy your day.
          </p>
        </div>
      </div>
    </section>
  );
}
