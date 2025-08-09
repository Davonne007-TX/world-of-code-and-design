import ReuseableCard from "../ReuseableCard";
import FriesHeader from "./FriesHeader";
export default function FriesMeetsCheese() {
  return (
    <section className="min-h-screen bg-black">
      <FriesHeader />
      <ReuseableCard
        sectionStyles="max-w-3xl mt-20 p-10 md:mt-40 text-white"
        heading={
          <>
            Best Cheese Fries in <span className="text-yellow-300">Town</span>
          </>
        }
        headingStyles="font-grav text-7xl"
        paragraphSection="Made fresh every order! Customize your Cheesy Fries with special toppings! Bacon, onions, chili, jalapeños, chicharrones and more! "
        paragraphStyles="text-4xl font-thin text-2xl"
      />
    </section>
  );
}
