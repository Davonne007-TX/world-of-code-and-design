import Image from "../Image";

export default function ConcertHero() {
  const time2025 = "./images/concert.jpg";
  return (
    <section className="flex justify-center items-center">
      <Image
        image={time2025}
        className="max-w-sm rounded-4xl md:max-w-xl lg:max-w-6xl p-2 "
      />
    </section>
  );
}
