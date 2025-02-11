import ReuseableCard from "../ReuseableCard";

export default function KarateHero() {
  const aboutIronFirst = `Whether your goal is to learn self defense, gain a new hobby, gain discipline in life, or build 
  leadership skills, we have a spot for you. `;

  const allAges = `At Iron Fist Karate we focus on the core values of Karate and strive to be the best version of ourselves.
  Welcome to all ages, we have the program for you..!`;
  return (
    <section>
      <ReuseableCard
        sectionStyles={"max-w-2xl ml-auto mt-20 md:mt-60 p-10"}
        heading={"Learn Honor. Respect. Discipline. Leadership. "}
        headingStyles={"text-3xl md:text-4xl font-bold font-pro"}
        paragraphSection={aboutIronFirst}
        secondParagraph={allAges}
        paragraphStyles={"text-2xl"}
        btnTxt={"Sign Up Today and Get a Free Trail"}
        btnStyles={
          "bg-black md:w-90 text-white p-2 font-pro text-xl rounded-full"
        }
      />
    </section>
  );
}
