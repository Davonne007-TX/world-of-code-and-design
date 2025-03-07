import AstroHeader from "./AstroHeader";
import Button from "../Button";

export default function NextGenerationAstro() {
  return (
    <main className="bg-[url('./images/nextAstro.jpg')] font-thin flex flex-col text-white bg-cover min-h-screen">
      <AstroHeader />
      <section className="flex flex-col bg-black/20 shadow-2xl justify-center items-center">
        <h2 className="font-semibold mt-28 text-2xl md:text-4xl">
          Learn from our experts. Train with the best. Be the best.
        </h2>
        <Button
          btnTxt={"Apply Today"}
          className={
            "mt-4 bg-teal-900 p-2 rounded-full w-40 font-audio text-xl"
          }
        />
      </section>
    </main>
  );
}
