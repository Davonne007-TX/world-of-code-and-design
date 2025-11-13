import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./components/HomePage"));
const SpaceExploration = React.lazy(() =>
  import("./components/space/SpaceExploration")
);
const WannaCode = React.lazy(() => import("./components/wanna/WannaCode"));

const FlyWithUs = React.lazy(() => import("./components/fly/FlyWithUs"));
const SkateCompetition = React.lazy(() =>
  import("./components/skate/SkateCompetition")
);
const GreaseToday = React.lazy(() => import("./components/grease/GreaseToday"));
const LetsRide = React.lazy(() => import("./components/ride/LetsRide"));
const Arcade = React.lazy(() => import("./components/gaming/Arcade"));
const WizardChess = React.lazy(() => import("./components/chess/WizardChess"));
const Spiderman = React.lazy(() => import("./components/spiderman/Spiderman"));
const AimHigh = React.lazy(() => import("./components/basketball/AimHigh"));
const PlanetExhibit = React.lazy(() =>
  import("./components/museum/PlanetExhibit")
);

const Valentines = React.lazy(() =>
  import("./components/valentinesDay/Valentines")
);

const KarateSchool = React.lazy(() =>
  import("./components/karate/KarateSchool")
);

const NextGenerationAstro = React.lazy(() =>
  import("./components/astro/NextGenerationAstro")
);

const RetroGaming = React.lazy(() => import("./components/retro/RetroGaming"));
const ScienceMuseum = React.lazy(() =>
  import("./components/science-museum/ScienceMuseum")
);

const Donuts = React.lazy(() => import("./components/donuts/Donuts"));
const BmxShop = React.lazy(() => import("./components/bmx/BmxShop"));
const PotOfGold = React.lazy(() => import("./components/gold/PotOfGold"));
const ShamrockTavern = React.lazy(() =>
  import("./components/st-patricks-day/ShamrockTavern")
);
const Ai = React.lazy(() => import("./components/ai/Ai"));
const OldWindows = React.lazy(() => import("./components/windows/OldWindows"));
const EatNow = React.lazy(() => import("./components/eat/EatNow"));
const Taco = React.lazy(() => import("./components/funkyTaco/Taco"));
const StayAlert = React.lazy(() => import("./components/tornado/StayAlert"));
const EasterEgg = React.lazy(() => import("./components/easter/EasterEgg"));
const Party = React.lazy(() => import("./components/concert/Party"));
const LevelUp = React.lazy(() => import("./components/tournament/LevelUp"));
const SummerTime = React.lazy(() => import("./components/summer/SummerTime"));
const GoBig = React.lazy(() => import("./components/lets-ride/GoBig"));
const MyCard = React.lazy(() => import("./components/developer-card/MyCard"));
const CalmPaws = React.lazy(() => import("./components/calm-paws/CalmPaws"));
const Fries = React.lazy(() => import("./components/fries/FriesMeetsCheese"));
const SuperRobot = React.lazy(() => import("./components/robot/SuperRobot"));
const MeltingPot = React.lazy(() => import("./components/waxing/MeltingPot"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="bg-black min-h-screen flex justify-center items-center font-lobster text-purple-600 text-6xl md:text-7xl">
            Magic Loading .....
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/space" element={<SpaceExploration />} />
          <Route path="/wannaCode" element={<WannaCode />} />
          <Route path="/fly" element={<FlyWithUs />} />
          <Route path="/skate" element={<SkateCompetition />} />
          <Route path="/greaseLightning" element={<GreaseToday />} />
          <Route path="/letsRide" element={<LetsRide />} />
          <Route path="/arcade" element={<Arcade />} />
          <Route path="/wizardChess" element={<WizardChess />} />
          <Route path="/spiderman" element={<Spiderman />} />
          <Route path="/basketball" element={<AimHigh />} />
          <Route path="/exhibit" element={<PlanetExhibit />} />
          <Route path="/valentines" element={<Valentines />} />
          <Route path="/karate" element={<KarateSchool />} />
          <Route path="/astro" element={<NextGenerationAstro />} />
          <Route path="/retro" element={<RetroGaming />} />
          <Route path="/dinosaur" element={<ScienceMuseum />} />
          <Route path="/donuts" element={<Donuts />} />
          <Route path="/bmx" element={<BmxShop />} />

          <Route path="/gold" element={<PotOfGold />} />
          <Route path="/tavern" element={<ShamrockTavern />} />
          <Route path="ai" element={<Ai />} />
          <Route path="/windows" element={<OldWindows />} />
          <Route path="/eat" element={<EatNow />} />
          <Route path="/funkyTaco" element={<Taco />} />
          <Route path="tornado" element={<StayAlert />} />
          <Route path="/easterEgg" element={<EasterEgg />} />
          <Route path="/concert" element={<Party />} />
          <Route path="/tournament" element={<LevelUp />} />
          <Route path="/summer" element={<SummerTime />} />
          <Route path="goBig" element={<GoBig />} />
          <Route path="myCard" element={<MyCard />} />
          <Route path="calmPaws" element={<CalmPaws />} />
          <Route path="fries" element={<Fries />} />
          <Route path="robot" element={<SuperRobot />} />
          <Route path="smooth" element={<MeltingPot />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
