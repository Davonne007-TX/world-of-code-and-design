import Image from "../Image";

export default function PotOfGold() {
  return (
    <main className="bg-[url('./images/rainbow.jpg')] bg-cover min-h-screen relative">
      <section className="flex-1">
        <Image
          image={"./images/gold.png"}
          className={"absolute bottom-58 md:bottom-40 ml-10 "}
        />
        <Image
          image={"./images/leperchaun.png"}
          className={"absolute bottom-58 md:bottom-40 ml-60 w-20"}
        />
      </section>
    </main>
  );
}
