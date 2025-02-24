import ReuseableCard from "../ReuseableCard";

export default function HomeTaco() {
  const andMore =
    "We got Carnitas, we got Fajitas, Barbacoa, Elote, Menudo, and More.";
  return (
    <section className="p-4 mt-40 ml-20">
      <ReuseableCard
        sectionStyles={"max-w-3xl"}
        heading={"Feeling Hungry?"}
        headingStyles={"text-5xl font-lobster"}
        paragraphSection={andMore}
        paragraphStyles={" text-2xl"}
      />
    </section>
  );
}
