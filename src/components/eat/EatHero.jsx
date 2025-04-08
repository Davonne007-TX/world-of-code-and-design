import Button from "../Button";
import Card from "../Card";
import Search from "./Search";

export default function EatHero() {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-10">
      <div className="max-w-5xl w-full flex flex-col items-center space-y-4">
        <Card
          title="Ultra Fast Delivery Service"
          className="text-white font-sig"
          description="Get Your Food delieved on your terms.
          When you want, how you want, for ulimate deliciousness. First time purachse get $20 off!"
          descriptionStyles="text-white max-w-2xl font-serif text-center"
        />

        <section className="flex flex-col md:flex-row gap-4">
          <Search />
          <Button
            btnTxt="Search Nearby"
            className="bg-white text-black rounded-full p-2 w-80 md:w-40"
          />
        </section>
      </div>
    </section>
  );
}
