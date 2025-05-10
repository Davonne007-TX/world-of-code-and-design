import ConcertHeader from "./ConcertHeader";
import ConcertHero from "./ConcertHero";

export default function Party() {
  return (
    <main className=" relative bg-gradient-to-b from-blue-950 via-black to-blue-950 min-h-screen flex  flex-col">
      <ConcertHeader />
      <div className="w-full mt-4 flex flex-col justify-center items-center mx-auto">
        <ConcertHero />
      </div>
    </main>
  );
}
