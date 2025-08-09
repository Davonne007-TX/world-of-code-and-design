import ReuseableCard from "../ReuseableCard";
import FriesHeader from "./FriesHeader";
import Button from "../Button";
import Image from "../Image";

export default function FriesMeetsCheese() {
  return (
    <section className="min-h-screen bg-black">
      <FriesHeader />
      <div className="ml-10">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <ReuseableCard
              sectionStyles="max-w-3xl mt-20 md:mt-40 text-white"
              heading={
                <>
                  Best Cheese Fries in{" "}
                  <span className="text-yellow-300">Town</span>
                </>
              }
              headingStyles="font-grav text-7xl"
              paragraphSection="Made fresh every order! Customize your Cheesy Fries with special toppings! Bacon, onions, chili, jalapeños, chicharrones and more! "
              paragraphStyles="text-3xl font-thin text-2xl"
            />
            <div className="flex gap-6 font-grav text-2xl">
              <Button
                btnTxt="Toppings"
                className="bg-yellow-300 cursor-pointer p-2 rounded-full"
              />
              <Button
                btnTxt="Cheesy App"
                className="bg-yellow-300 cursor-pointer p-2 rounded-full"
              />
            </div>
          </div>
          <Image
            image="./images/fries.jpg"
            className="max-w-md rounded-3xl shadow-2xl"
            alt="Cheesy Cheese Fries, image by fabio-alves on Unsplash"
          />
        </div>
      </div>
    </section>
  );
}
