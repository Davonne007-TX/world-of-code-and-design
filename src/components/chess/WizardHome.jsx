import WizardHeader from "./WizardHeader";
import Button from "../Button";
import Image from "../Image";
export default function WizardHome() {
  const champion = "Become The Next Champion";
  const details = `Harry Potter fans from around the world get to come together
  and have a chance to compete in this years Wizards Chess Tournament. Deadline 
  to enter is 2/14/25 to be able to compete in the Summer 2025 in the
  United Kingdom.`;

  const wizardChess = "./images/wizardChess.jpg";
  return (
    <>
      <WizardHeader />

      <section className="mx-auto max-w-xs md:max-w-6xl mt-20">
        <section className="flex flex-col justify-center items-center lg:flex-row md:gap-10 lg:gap-20 ">
          <div className="flex flex-col gap-4 mt-10 md:ml-0">
            <h2 className="text-3xl md:text-5xl font-bold font-glo">
              {champion}
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed">{details}</p>
            <Button
              btnTxt={"Save My Spot"}
              className={"bg-black text-white p-2 rounded-full w-40 text-xl"}
            />
          </div>
          <div className="ml-10">
            <Image
              image={wizardChess}
              className={"max-w-xl md:max-w-2xl  mt-10 rounded-xl"}
            />
          </div>
        </section>
      </section>
    </>
  );
}
