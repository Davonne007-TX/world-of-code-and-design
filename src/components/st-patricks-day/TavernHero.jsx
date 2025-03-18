import Button from "../Button";

export default function TavernHero({ heroTitle, heroDescription }) {
  return (
    <section className="flex flex-col justify-center items-center mt-10 p-10 ">
      <div className="max-w-lg md:max-w-2xl flex flex-col gap-4 text-center">
        <h2 className="text-4xl font-bold">{heroTitle}</h2>
        <p className="text-xl font-serif">{heroDescription}</p>
        <Button
          btnTxt={"Order Ahead ↗"}
          className={
            "bg-green-500 w-40 mx-auto font-bold rounded-full p-2 text-center"
          }
        />
      </div>
    </section>
  );
}
