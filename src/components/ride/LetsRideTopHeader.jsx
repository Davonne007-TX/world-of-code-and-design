import Image from "../Image";
import Location from "./Location";
import Button from "../Button";
export default function LetsRideTopHeader() {
  const cartImage = "/images/cartIcon.png ";
  const waiting = ["Whats stopping your from riding like this?"];
  return (
    <>
      <section className="w-full font-serif  bg-pink-700/60 ps-1 text-white text-lg">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 p-2">
          <p className="mt-4">{waiting}</p>
          <Image
            image={cartImage}
            alt="Cart Logo, logo by icons8"
            className="md:ml-auto w-8 h-10 mt-3"
          />
          <div className="flex">
            <Button
              className="mt-2 text-white p-2 hover:underline"
              btnTxt={"Login"}
            />
            <Button
              className="mt-2 text-white hover:underline "
              btnTxt={"Sign Up"}
            />
          </div>
        </div>
      </section>

      <Location />
    </>
  );
}
