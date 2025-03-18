import Image from "../Image";
import GoldHeader from "./GoldHeader";
import GoldHero from "./GoldHero";

export default function PotOfGold() {
  return (
    <main className="bg-[url('./images/rainbow.jpg')] bg-cover min-h-screen relative">
      <GoldHeader />
      <GoldHero />
      <section className="flex-1">
        <Image
          image={"./images/gold.png"}
          className={"absolute bottom-74 md:bottom-58 lg:bottom-40 ml-10 "}
        />
        <Image
          image={"./images/leperchaun   .png"}
          className={"absolute bottom-74 md:bottom-58 lg:bottom-40 ml-60 w-20"}
        />
      </section>
    </main>
  );
}
