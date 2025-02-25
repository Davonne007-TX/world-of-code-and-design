import Image from "../Image";
import ReuseableCard from "../ReuseableCard";

export default function BikeHero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <section className="relative max-w-3xl flex justify-center">
        <Image
          image={"./images/bmx2.jpg"}
          className="max-w-6xl -mt-20 md:-mt-40 rounded-2xl"
        />
        <section className="absolute">
          <ReuseableCard
            sectionStyles={"bg-white p-4 ml-auto  shadow-lg rounded-lg mt-96"}
          />
        </section>
      </section>
    </section>
  );
}
