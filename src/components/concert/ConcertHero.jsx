import Button from "../Button";

export default function ConcertHero() {
  return (
    <section className="flex flex-col text-center items-center  text-white">
      <div className="max-w-3xl mt-20 flex flex-col gap-4">
        <h1 className="text-6xl font-sed">2000's Hip Hop and R&B</h1>
        <p className="text-2xl tracking-wide">
          Listen to the music you grew up with. Be with friends. Share memories
          and create new ones. Lets party like a rockstar and lean back like its
          our birthday!
        </p>

        <Button
          btnTxt="Get Your Seat"
          className="w-80 mx-auto bg-white text-black font-sed text-2xl px-5 py-2 rounded-full shadow-md hover:bg-gradient-to-r from-gray-100 to-gray-300 hover:scale-110 transition-all duration-300"
        />
      </div>
    </section>
  );
}
