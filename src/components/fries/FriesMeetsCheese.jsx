import ReuseableCard from "../ReuseableCard";
import FriesHeader from "./FriesHeader";
import Button from "../Button";
import Image from "../Image";

export default function FriesMeetsCheese() {
  return (
    <section className="min-h-screen bg-black">
      <FriesHeader />
      <div className="ml-10">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="flex flex-col">
            <ReuseableCard
              sectionStyles="max-w-3xl mt-10  text-white"
              heading={
                <>
                  Best Cheese Fries in{" "}
                  <span className="text-yellow-300">Town</span>
                </>
              }
              headingStyles="font-grav text-5xl md:text-7xl"
              paragraphSection="Made fresh every order! Customize your Cheesy Fries with special toppings! Bacon, onions, chili, jalapeños, chicharrones and more! "
              paragraphStyles="text-3xl font-thin text-2xl"
            />
            <div className="flex flex-col font-thin md:flex-row gap-6 text-2xl">
              <Button
                btnTxt="Toppings"
                className="bg-yellow-300 hover:scale-105 cursor-pointer p-2 w-60 rounded-full"
              />
              <Button
                btnTxt="Cheesy App"
                className="bg-yellow-300 hover:scale-105 transition-all duration-300 cursor-pointer p-2 w-60 rounded-full"
              />
            </div>
          </div>
          <Image
            image="./images/fries.jpg"
            alt="Cheesy Cheese Fries, image by fabio-alves on Unsplash"
            className="max-w-md rounded-3xl mt-8 border-4 border-yellow-100 bg-gradient-to-br from-amber-300 via-yellow-200 to-amber-500
            shadow-[0_0_30px_rgba(253,224,71,0.8)]
  "
          />
        </div>
      </div>
    </section>
  );
}
