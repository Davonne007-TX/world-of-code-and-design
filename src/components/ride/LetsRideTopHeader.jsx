import Image from "../Image";
import Location from "./Location";
export default function LetsRideTopHeader() {
  const cartImage = "/images/cartIcon.png ";
  const waiting = ["What are you waiting for, find your location today"];
  return (
    <>
      <section className="w-full font-serif bg-pink-700/60 p-2 text-white text-md">
        <section className="flex gap-4">
          <p>{waiting}</p>
          <Image image={cartImage} className="ml-auto w-20" />
          <p className="mt-2 md:mt-0">Login</p>
        </section>
      </section>

      <Location />
    </>
  );
}
