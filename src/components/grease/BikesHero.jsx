import Button from "../Button";
import Image from "../Image";

const bike = "/images/bike.jpg";
export default function FiftesHero() {
  const ultimateRide = ` Get the ultimate ride of your life when you ride Systematic Custom
     Bikes.`;

  const customize = `Customize to the T, how you ride, your vibe, style, and custom
            parts.`;
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-20 lg:gap-40 mb-10">
        <div className="flex flex-col max-w-xs md:max-w-xl gap-4 mt-28 lg:mt-0 lg:mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orb text-white mb-4">
            Your Dream Ride <span className="text-pink-600">Awaits...</span>
          </h2>
          <p className="text-white text-2xl">{ultimateRide}</p>

          <p className="text-white text-2xl">{customize}</p>

          <Button
            btnTxt={"Get Your Bike Today"}
            className={
              "bg-pink-600 p-2 rounded-full text-white mt-4 max-w-sm font-bold text-xl"
            }
          />
        </div>
        <Image
          image={bike}
          className={"max-w-sm md:max-w-2xl lg:max-w-3xl rounded-3xl"}
          alt={
            "Pink Racer Bike Popping a Wheel E, Photo by Anastasia Shuraeva on Pexels "
          }
        />
      </div>
    </section>
  );
}
