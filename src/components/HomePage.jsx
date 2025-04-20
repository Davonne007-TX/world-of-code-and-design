import React, { Suspense } from "react";
import Footer from "./Footer";

const MyWork = React.lazy(() => import("./MyWork"));

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white via-pink-400 min-h-screen flex flex-col justify-between">
      <section className="flex flex-col px-6 md:px-12 lg:px-20 py-16 space-y-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-glo leading-tight">
          2025 — From Design to{" "}
          <span className="text-pink-500 drop-shadow-[0_2px_4px_rgba(236,72,153,0.5)]">
            Code 💻
          </span>
        </h1>

        <Suspense
          fallback={
            <div className="flex justify-center items-center text-pink-400 text-3xl min-h-[40vh] animate-pulse">
              Magic in the making...
            </div>
          }
        >
          <MyWork />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
