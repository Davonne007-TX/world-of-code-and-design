import Image from "../Image";
export default function ConcertHero() {
  const time2025 = "./images/concert.jpg";
  return (
    <section className="flex flex-col justify-center items-center">
      <Image image={time2025} className="w-full max-w-full rounded-4xl p-2" />

      <div className="flex flex-col gap-4 text-white mb-8 md:mb-0 md:top-60 md:left-48 font-cut absolute text-sm md:text-w-3xl md:text-5xl">
        <p className=" bg-black -skew-4 p-4">Party of The Year</p>
        <p className=" bg-black -skew-4 p-4">Tickets on Sale Now</p>
      </div>
      <Image
        image="./images/time.png"
        className="max-w-xs lg:max-w-xl absolute right-0 mt-60"
      />
    </section>
  );
}
