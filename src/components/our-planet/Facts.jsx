export default function Facts() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-5xl font-serif text-blue-400 font-bold">89%</p>
        <p className="text-white max-w-3xs text-md  text-center">
          Above average temperature in the Atlantic Ocean
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-5xl font-serif text-blue-400 font-bold">1.48°C</p>
        <p className="text-white max-w-3xs text-md  text-center">
          Global temperature rise since pre-industrial times{" "}
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-5xl font-serif text-blue-400 font-bold">30%</p>
        <p className="text-white max-w-3xs text-md  text-center">
          Increase in our oceans acidity due to absorbing heat
        </p>
      </div>
    </section>
  );
}
