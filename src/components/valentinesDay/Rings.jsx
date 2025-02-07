import Button from "../Button";

export default function Rings() {
  return (
    <section className="rounded-xl">
      <section className="relative flex justify-center items-center min-h-screen bg-[url('./images/rings.jpg')] bg-contain bg-center bg-no-repeat rounded-bg">
        <section className="text-2xl font-thin mx-auto flex justify-center items-center">
          <p className="text-4xl font-thin text-center absolute top-20">
            Get Your Last Minute Valentines Day Gift
          </p>
          <p className="absolute top-48 max-w-2xl text-balance text-center">
            Choose from an exquisite selection of diamonds, each carefully
            crafted to capture the essence of love and devotion. Whether you're
            celebrating a new romance or a lifelong journey together, give a
            gift that speaks from the heart. Get a gift they will love and never
            forget.
          </p>
          <Button
            btnTxt={"Shop Now"}
            className={"bg-purple-300 font-thin text-center rounded-full p-2"}
          />
        </section>
      </section>
    </section>
  );
}
