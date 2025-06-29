import Image from "../Image";
import Offers from "./Offers";
import TechStack from "./TechStack";

export default function TheeCard() {
  const me = "/images/me.png";
  const title = "Frontend Developer / UI Developer";
  return (
    <section className="max-w-xs md:max-w-lg md:ml-40 flex p-4 flex-col justify-center items-center">
      <div className="rounded-lg animated-border-card">
        <div className=" bg-white flex flex-col gap-4 rounded text-center p-2 mt-20 this-one">
          <Image image={me} className="p-2 rounded-2xl w-80 mx-auto" />
          <h1 className="font-sig text-5xl">Davonne Vigil</h1>
          <p className="text-2xl font-mono">{title}</p>
          <TechStack />
          <Offers />
        </div>
      </div>
    </section>
  );
}
