import Image from "../Image";
import Location from "./Location";
export default function LetsRideTopHeader() {
  const cartImage = "/images/cartIcon.png ";
  const waiting = ["What are you waiting for, find your location today"];
  return (
    <>
      <section className="w-full font-serif bg-pink-700/60 p-1 text-white text-lg">
        <section className="flex gap-4 m-2">
          <p className="mt-2">{waiting}</p>
          <Image image={cartImage} className="ml-auto w-20 md:w-10" />
          <p className="mt-2">Login</p>
        </section>
      </section>

      <Location />
    </>
  );
}
