import Button from "../Button";
import Image from "../Image";

export default function ConcertHero() {
  return (
    <section className="relative w-full  h-screen text-white">
      <Image
        image="/images/concert.jpg"
        className="absolute w-full h-full object-cover "
      />

      <div className="relative flex flex-col items-center justify-center text-center h-full px-4">
        <div className="mb-40 p-6 bg-white/60 text-black rounded-3xl">
          <h1 className="text-5xl md:text-6xl font-sed mb-6">
            2000's Hip Hop and R&B
          </h1>
          <p className="text-2xl max-w-2xl tracking-wide mb-8">
            Party to the music you grew up with. Be with friends. Share memories
            and create new ones. Let’s party like a rockstar and lean back like
            it’s our birthday!
          </p>
          <Button
            btnTxt="Get Your Seat"
            className="w-80 bg-white text-black font-sed text-2xl px-5 py-2 rounded-full shadow-md hover:bg-gradient-to-r from-gray-100 to-gray-300 hover:scale-110 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
