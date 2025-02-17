import Image from "../Image";
import ReuseableCard from "../ReuseableCard";

export default function ScienceHero() {
  const heroSectionText = `Quisque leo nisl, varius at purus vel, fringilla elementum sem. Aenean vestibulum est eget accumsan placerat. Vestibulum lorem erat, aliquam ac pellentesque et, pellentesque eget sapien. Aenean efficitur sit amet ante sit amet ultrices. In lacinia tincidunt magna nec tempuss`;
  return (
    <section className=" mt-10 md:mt-20 flex flex-col justify-center items-center">
      <section className="flex flex-col lg:flex-row gap-20">
        <section>
          <ReuseableCard
            sectionStyles={"max-w-xl mt-10 ml-10 md:ml-0 "}
            heading={"Take a Trip To The Mesozoic Era"}
            headingStyles={"text-3xl font-glo"}
            paragraphSection={heroSectionText}
            paragraphStyles={"text-2xl font-sans"}
            btnSection={"flex gap-38"}
            btnTxt={"Plan Your Trip Today"}
            btnStyles={
              "bg-green-600 text-lg p-2 hover:scale-105 font-glo text-white rounded w-60"
            }
          />

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
            <Image
              image={"./images/fighting2.jpg"}
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
          image={"./images/dino.jpg"}
          className={"max-w-xs md:max-w-md rounded-xl mr-20 lg:mr-0"}
          alt={
            "T-Rex in the Forest, Image by Faustro Garcia-Menedez, on Unsplash"
          }
        />
      </section>
    </section>
  );
}
