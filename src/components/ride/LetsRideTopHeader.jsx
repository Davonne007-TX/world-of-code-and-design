import Image from "../Image";
import Location from "./Location";
import Button from "../Button";
export default function LetsRideTopHeader() {
  const cartImage = "/images/cartIcon.png ";
  const waiting = ["What are you waiting for, find your location today"];
  return (
    <>
      <section className="w-full font-serif  bg-pink-700/60 ps-1 text-white text-lg">
        <section className="flex flex-row gap-4 p-2">
          <p className="mt-4">{waiting}</p>
          <Image image={cartImage} className="ml-auto w-8 h-10 mt-3" />
          <Button
            className="mt-2  bg-black rounded-full text-white p-2"
            btnTxt={"Login"}
          />
          <Button
            className="mt-2 bg-black rounded-full text-white p-2 "
            btnTxt={"Sign Up"}
          />
        </section>
      </section>

      <Location />
    </>
  );
}
