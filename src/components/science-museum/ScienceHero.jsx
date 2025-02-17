import Image from "../Image";
import ReuseableCard from "../ReuseableCard";

export default function ScienceHero() {
  const fighting = "./images/fighting2.jpg";
  const dino = "./images/dino.jpg";
  const heroSectionText = `Here at Mesozoic Marvels, we bring the past to you! 
  We dedicate our museum to bringing exhibits about your favorite dinosaurs,
  showcasing their history, habitats, and evolution. From towering T. Rexes
  to swift raptors, our interactive displays and fossil collections transport
  you back to the Mesozoic Era. Whether you're a paleontologist or just a
  dinosaur enthusiast, there's something for everyone to explore, learn,
  and marvel at. Step into the world of prehistoric giants and uncover
  the mysteries of Earth's ancient past!`;

  return (
    <section className=" mt-10 md:mt-10 flex flex-col justify-center items-center">
      <section className="flex flex-col lg:flex-row gap-20 mb-20">
        <section>
          <ReuseableCard
            sectionStyles={"max-w-xs md:max-w-xl mt-10 ml-10 md:ml-0 p-2 "}
            heading={"Take a Trip To The Mesozoic Era"}
            headingStyles={"text-3xl font-glo"}
            paragraphSection={heroSectionText}
            paragraphStyles={"text-xl font-sans"}
            btnSection={"flex gap-38"}
            btnTxt={"Plan Your Trip Today"}
            btnStyles={
              "bg-green-600 text-lg p-2 hover:scale-105 font-glo text-white rounded w-60"
            }
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
            <Image
              image={fighting}
              className={"max-w-xs rounded-xl"}
              alt={"Dinosaurs Fighting, Image by rafal-danhoffer on Unsplash"}
            />
            <Image
              image={"./images/t-rex2.jpg"}
              className={"max-w-xs rounded-xl"}
              alt={"T-Rex, Image by amy-leigh on Unsplash "}
            />
          </div>
        </section>
        <Image
          image={dino}
          className={"max-w-xs md:max-w-md rounded-xl lg:mr-0 mx-auto "}
          alt={
            "Sauropods Dinosaur in the Forest, Image by Jana292, on Unsplash"
          }
        />
      </section>
    </section>
  );
}
