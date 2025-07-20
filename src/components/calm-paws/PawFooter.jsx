import { FaPaw } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

export default function PawFooter() {
  return (
    <footer className="w-fuil text-2xl font-sig text-white p-4 bg-black/80 flex justify-between">
      <FaPaw className="text-8xl md:text-4xl" />

      <div className="flex flex-col gap-8 justify-center items-center max-w-3xl mt-8">
        <div className="flex">
          <FaStar className=" fill-red-500 w-20" />
          <FaStar className=" fill-white w-20" />
          <FaStar className=" fill-blue-500 w-20" />
        </div>

        <p className="font-bold text-xl">Your doing an aweome job!</p>
        <p className="font-sans font-thin text-center">
          Your pet is lucky to have you, to take care of them during this
          stressful time. With the right precautions and resouces, everyone can
          have a safe celebration
        </p>

        <div className="flex items-center justify-center gap-3 my-4 w-full">
          <div className="h-px bg-white flex-1"></div>
          <FaHeart className="fill-red-500 text-2xl" />
          <div className="h-px bg-white flex-1"></div>
        </div>

        <div className="flex gap-4">
          <FaCircleInfo />
          <p className="font-thin text-center font-sans text-lg text-thin">
            Emergency Resource Guide, Always consult with your veterinarian
          </p>
        </div>

        <p>💥 Happy 4th of July 💥</p>

        <p className="mt-4 text-center">
          © 2025 Calm Paws Project. All rights reserved.{" "}
        </p>
      </div>

      <FaPaw className="text-8xl md:text-4xl" />
    </footer>
  );
}
