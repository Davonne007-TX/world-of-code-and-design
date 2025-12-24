import PlanetNav from "./PlanetNav";
import Image from "../Image";

export default function OurPlanet() {
  return (
    <main className="flex flex-col justify-center items-center">
      <PlanetNav />
      <div className="relative min-h-screen">
        <Image
          image="./images/earth.webp"
          className="object-cover min-h-screen"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>
    </main>
  );
}
