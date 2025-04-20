import Image from "../Image";
import TacoHeader from "./TacoHeader";

export default function HomeTaco() {
  const taco = "./images/taco.jpg";
  return (
    <section className="w-full bg-[url('./images/funkyTaco.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-between">
      <TacoHeader />
      <div
        className="flex flex-col justify-end
       mt-auto ml-84 md:mr-40 "
      >
        <Image
          image={taco}
          className="max-w-xs md:max-w-md rounded-full ml-auto flex md:mb-20 p-4"
        />
      </div>
    </section>
  );
}
