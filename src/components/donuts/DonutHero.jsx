import Image from "../Image";
import ReuseableCard from "../ReuseableCard";

export default function DonutHero() {
  const pinkDonuts = "/images/ourDonuts.jpg";
  const collection = "/images/collection.jpg";
  const aboutCozy = `Anytime you want some donuts, we got you! Made fresh to order and comes with a free coffee!`;

  const chooseDonuts = `Choose from our variety of Donuts from Glazed, Chocolate Glazed, Chocolate Cake, French  Crullers, Sprinkle Donuts and More..! `;

  return (
    <section className="flex flex-col md:flex-row gap-10 mt-40 justify-center items-center">
      <Image
        image={pinkDonuts}
        className={"rounded-3xl max-w-xs shadow-md"}
        alt={"Collection of Cake Donuts, Image by Shayna-douglas on Unsplash"}
      />

      <Image
        image={collection}
        className={"rounded-3xl max-w-xs shadow-md"}
        alt={"Collection of Donuts, Image by Shayna-douglas on Unsplash"}
      />
      <ReuseableCard
        sectionStyles={"max-w-xl"}
        heading={"Open 24 Hours"}
        headingStyles={"text-pink-500 text-6xl md:text-6xl font-bold font-sig"}
        paragraphSection={aboutCozy}
        paragraphStyles={"text-2xl"}
        secondParagraph={chooseDonuts}
        btnTxt={"Order Now to get 14 a Dozen 🍩"}
        btnStyles={"bg-pink-500 md:w-90 text-white p-2 font-sig text-xl"}
      />
    </section>
  );
}
