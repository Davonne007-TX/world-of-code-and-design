import WizardHeader from "./WizardHeader";
import Button from "../Button";
import Image from "../Image";

export default function WizardHome() {
  const champion = "become the next champion...";
  const arrow = "./images/arrow.png";

  return (
    <section className="bg-[url('./images/wc.jpg')] bg-cover min-h-screen">
      <WizardHeader />
      <p className="text-white font-glo text-2xl mt-10 ml-40 lg:ml-48">
        {champion}
      </p>

      <div className="flex gap-8">
        <Button
          btnTxt={"Sign Up"}
          className={
            "bg-black text-white p-2  ml-40 md:ml-48 mt-4 rounded-xl font-glo flex justify-center items-center text-2xl"
          }
        />
        <Image
          image={arrow}
          className={"w-12 h-12 mt-4 animate-pulse cursor-pointer"}
        />
      </div>
    </section>
  );
}
