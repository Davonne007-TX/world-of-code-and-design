import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("./components/HomePage"));
const SpaceExploration = React.lazy(() =>
  import("./components/space/SpaceExploration")
);
const WannaCode = React.lazy(() => import("./components/wanna/WannaCode"));
import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading .....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/space" element={<SpaceExploration />} />
          <Route path="/wannaCode" element={<WannaCode />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
