import Image from "../Image";

export default function RideHero() {
  const pinkBike = "/images/pinkBike.jpg";

  return (
    <section className="flex justify-center items-center mt-10">
      <Image
        image={pinkBike}
        className={"max-w-xs md:max-w-2xl lg:max-w-5xl rounded-xl h-auto"}
      />
    </section>
  );
}
