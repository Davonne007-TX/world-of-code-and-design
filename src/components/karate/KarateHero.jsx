import ReuseableCard from "../ReuseableCard";

export default function KarateHero() {
  return (
    <section>
      <ReuseableCard
        sectionStyles={"max-w-2xl ml-auto mt-60 shadow-sm p-4 mr-20"}
        heading={"Learn Honor. Respect. Discipline. Leadership. "}
        headingStyles={"text-4xl md:text-4xl font-bold"}
        paragraphSection={
          "urabitur cursus velit ac elit ultrices, a mollis leo iaculis. Donec lobortis lacinia neque sed venenatis. Donec ultrices consectetur leo at gravida. Suspendisse enim tortor."
        }
        paragraphStyles={"text-3xl"}
      />
    </section>
  );
}
