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

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="bg-black min-h-screen flex text-purple-500 text-5xl">
            Loading .....
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
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
