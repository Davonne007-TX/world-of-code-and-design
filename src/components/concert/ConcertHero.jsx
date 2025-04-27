import Image from "../Image";

export default function ConcertHero() {
  const time2025 = "./images/concert.jpg";
  return (
    <section className="flex justify-center items-center">
      <Image
        image={time2025}
        className="max-w-sm relative rounded-4xl md:max-w-xl lg:max-w-6xl p-2 "
      />

      <div className="flex flex-col gap-4 text-white top-60 left-48 font-bold absolute text-sm md:text-w-2xl md:text-5xl">
        <p className=" bg-black -skew-4 p-2">Party of The Year</p>
        <p className=" bg-black -skew-4 p-2">Tickets on Sale Now</p>
      </div>
    </section>
  );
}
