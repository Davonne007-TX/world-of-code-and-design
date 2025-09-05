import Button from "../Button";
import Image from "../Image";

export default function Rings() {
  const selection = `Choose from an exquisite selection of diamonds, each carefully
            crafted to capture the essence of love and devotion. Whether you're
            celebrating a new romance or a lifelong journey together, give a
            gift that speaks from the heart. Get a gift they will love and never
            forget.`;
  return (
    <section className="flex justify-center items-center">
      <div className="relative max-w-6xl">
        <Image image="./images/rings.jpg" className="w-full rounded-3xl mt-4" />

        <div className="absolute lg:top-0 left-0 w-full font-thin mt-10 md:mt-40 flex flex-col justify-center items-center text-black py-4">
          <p className="text-4xl font-thin text-center">
            Get Your Last Minute Valentines Day Gift
          </p>
          <p className="max-w-2xl text-center mt-4 text-2xl ">{selection}</p>
          <Button
            btnTxt={"Shop Now"}
            className="bg-purple-300 font-thin text-center rounded-full p-2 mt-6 text-lg"
          />
        </div>
      </div>
    </section>
  );
}
