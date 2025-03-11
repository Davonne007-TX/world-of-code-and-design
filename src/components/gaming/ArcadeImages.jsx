import Image from "../Image";

export default function ArcadeImages() {
  const skiBall = "./images/skiBall.jpg";
  const basketballGame = "./images/basketballGame.jpg";
  const arcade = "./images/arcade.jpg";
  return (
    <section className="mt-8 flex flex-col lg:flex-row gap-4 justify-center items-center">
      <Image
        image={skiBall}
        className={"max-w-xs md:max-w-xl lg:max-w-xs rounded-2xl"}
        alt={"Ski ball, Image by Allen Boguslavsky on Pexels"}
      />

      <Image
        image={arcade}
        className={"max-w-xs md:max-w-xl lg:max-w-xs  rounded-2xl"}
        alt={", Image by Allen Boguslavsky on Pexels"}
      />
      <Image
        image={basketballGame}
        className={"max-w-xs md:max-w-xl lg:max-w-xs rounded-2xl"}
        alt={"Basketball Game, Image by Allen Boguslavsky on Pexels"}
      />
    </section>
  );
}
