import React, { Suspense } from "react";

const MyWork = React.lazy(() => import("./MyWork"));

export default function Home() {
  return (
    <main className="bg-black h-screen text-white">
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold font-glo mt-10">2025</h1>
        <p className="text-2xl font-glo mt-4"> From Design to Code</p>
        <Suspense fallback={<div>Magic in the making....</div>}>
          <MyWork />
        </Suspense>
      </section>
    </main>
  );
}
