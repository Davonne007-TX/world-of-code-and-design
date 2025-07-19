import Image from "../Image";

export default function Roxy() {
  return (
    <section className="my-20 flex justify-center items-center">
      <div className="relative">
        <Image
          image="./images/cloud.png"
          className="absolute top-40 max-w-sm lg:max-w-md text-center text-sm font-semibold text-black "
        />
        <blockquote className="relative top-76 lg:top-80 left-30 font-sig flex-wrap text-2xl lg:text-4xl w-40">
          <cite> "Not these fireworks again!"</cite>
        </blockquote>
        <Image
          image="./images/roxy2.png"
          className="max-w-xs md:max-w-3xl lg:max-w-5xl rounded-3xl "
        />
      </div>
    </section>
  );
}
