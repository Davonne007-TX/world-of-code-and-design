import Image from "../Image";

export default function TheeCard() {
  const me = "/images/me.png";
  const title = "Frontend Developer / UI Developer";
  return (
    <section className="max-w-sm md:max-w-2xl ml-20 flex p-4 flex-col justify-center items-center">
      <div className=" bg-white rounded text-center border-4 border-neonGreen p-2 mt-40">
        <Image image={me} className="p-2 rounded-2xl w-80 mx-auto" />
        <h1 className="font-sig text-5xl">Davonne Vigil</h1>
        <p className="text-2xl font-mono">{title}</p>
      </div>
    </section>
  );
}
