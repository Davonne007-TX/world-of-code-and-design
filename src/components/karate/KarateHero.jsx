import ReuseableCard from "../ReuseableCard";
import Button from "../Button";

export default function KarateHero() {
  const aboutIronFirst = `Whether your goal is to learn self defense, gain a new hobby, gain discipline in life, or build 
  leadership skills, we have a spot for you. `;

  const allAges = `At Iron Fist Karate we focus on the core values of Karate and strive to be the best version of ourselves.
  Welcome to all ages, we have the program for you..!`;
  return (
    <section>
      <ReuseableCard
        sectionStyles={"max-w-2xl ml-auto mt-40 p-4 mr-20"}
        heading={"Learn Honor. Respect. Discipline. Leadership. "}
        headingStyles={"text-3xl md:text-4xl font-bold font-glo"}
        paragraphSection={aboutIronFirst}
        secondParagraph={allAges}
        paragraphStyles={"text-2xl"}
        btnTxt={"Sign Up Today and Get a Free Trail"}
        btnStyles={"bg-black text-white p-2 font-glo text-xl rounded-full"}
      />
    </section>
  );
}
