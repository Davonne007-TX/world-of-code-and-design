import Button from "../Button";
import Card from "../Card";

export default function EatHero() {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-10">
      <div className="max-w-4xl w-full flex flex-col items-center space-y-4">
        <Card
          title="Ultra Fast Delievery Service"
          className="text-white font-sig"
          description="Get Your Food delieved on your terms.
          When you want, how you want, for ulimate deliciousness."
          descriptionStyles="text-white font-serif text-center"
        />
        <Button
          btnTxt="Order Classic Favorites"
          className="bg-white text-black rounded-full p-2 font-bold w-80"
        />
      </div>
    </section>
  );
}
