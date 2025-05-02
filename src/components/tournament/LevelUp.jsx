import Card from "../Card";
import Button from "../Button";
import BasketballHeader from "./BasketballHeader";

export default function LevelUp() {
  return (
    <main className="bg-[url('images/centerBasketball.jpg')] bg-cover min-h-screen">
      <section className="flex flex-col justify-center items-center">
        <div className="flex justify-between">
          <BasketballHeader />
        </div>
        <div className="mt-4 max-w-2xl lg:max-w-4xl flex flex-col justify-center items-center">
          <Card
            title="Level Up Tournament 2025"
            className="font-glo text-white text-center text-2xl md:text-3xl lg:text-4xl"
            description="Take your basketball skills to the next level. With our coaches and
                  experiences, you will be dunking all day. Just in time to get ready for when the season starts."
            descriptionStyles="text-white text-center font-sans text-wrap text-lg md:text-2xl lg:text-3xl"
          />

          <div className="relative w-full max-w-xs md:max-w-md mt-6">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full rounded-full py-3 px-6 pr-32 text-black text-lg font-sans bg-white shadow-lg"
            />
            <Button
              btnTxt="Sign Up"
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black text-white px-5 py-2 rounded-full font-glo font-bold text-lg hover:bg-gray-800 transition"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
