import React, { Suspense } from "react";
import Footer from "./Footer";

const MyWork = React.lazy(() => import("./MyWork"));

export default function Home() {
  return (
    <main className="bg-black/80 min-h-screen text-white flex flex-col justify-between">
      <section className="flex flex-col ml-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-glo mt-10 mr-auto">
          2025 - From Design to <span className="text-purple-600">Code 💻</span>
        </h1>

        <Suspense fallback={<div>Magic in the making....</div>}>
          <MyWork />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
