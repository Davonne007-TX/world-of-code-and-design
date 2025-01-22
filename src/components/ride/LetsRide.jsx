import LetsRideHeader from "./LetsRideHeader";
import LetsRideTopHeader from "./LetsRideTopHeader";
import RideHero from "./RideHero";
import Hottest from "./Hottest";

export default function LetsRide() {
  return (
    <main className="bg-neutral-100">
      <LetsRideTopHeader />
      <LetsRideHeader />
      <RideHero />
      <Hottest />
    </main>
  );
}
