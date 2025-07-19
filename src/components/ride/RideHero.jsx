import Image from "../Image";

export default function RideHero() {
  const pinkBike = "/images/letsRide.jpg"; //image from Anastasia Shuraeva on pexels

  return (
    <section className="flex justify-center items-center mt-8">
      <Image
        image={pinkBike}
        className={"max-w-md md:max-w-3xl lg:max-w-4xl rounded-xl h-auto"}
      />
    </section>
  );
}
