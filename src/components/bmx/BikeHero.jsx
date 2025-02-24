import Image from "../Image";
import ReuseableCard from "../ReuseableCard";

export default function BikeHero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <div className="relative max-w-6xl flex justify-center">
        <Image image={"./images/bmx.jpg"} className="max-w-6xl" />
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <ReuseableCard
            sectionStyles={
              "bg-white p-4 ml-10 shadow-lg rounded-lg text-left mt-96"
            }
            heading={"We Got The Gear"}
            headingStyles={"text-5xl font-pro bg-black tilted p-2 text-white"}
            paragraphSection={"fmfkdfmdkmfmdfmdfkmdfkm.fkdfkfkdfdkfmfm"}
            paragraphStyles={"text-xl p-2"}
          />
        </div>
      </div>
    </section>
  );
}
