import Image from "../Image";
import ReuseableCard from "../ReuseableCard";

export default function ScienceHero() {
  const heroSectionText = `Quisque leo nisl, varius at purus vel, fringilla elementum sem. Aenean vestibulum est eget accumsan placerat. Vestibulum lorem erat, aliquam ac pellentesque et, pellentesque eget sapien. Aenean efficitur sit amet ante sit amet ultrices. In lacinia tincidunt magna nec tempuss`;
  return (
    <section className=" mt-20 md:mt-40 flex flex-col justify-center items-center">
      <section className="flex flex-col md:flex-row gap-10">
        <ReuseableCard
          sectionStyles={"max-w-xl"}
          heading={"Take a Trip To The Mesozoic Era"}
          headingStyles={"text-3xl font-glo"}
          paragraphSection={heroSectionText}
          paragraphStyles={"text-2xl font-sans"}
          btnTxt={"Learn More"}
          btnStyles={
            "bg-green-600 text-lg p-2 hover:scale-105 font-glo text-white rounded w-40"
          }
        />
        <Image
          image={"./images/t-rex.jpg"}
          className={
            "max-w-xs md:max-w-xl lg:max-w-2xl rounded-xl mr-20 lg:mr-0"
          }
        />
      </section>
    </section>
  );
}
