import React from "react";

export default function LetsRideTopHeader() {
  const waiting = ["What are you waiting for, find your location today"];
  return (
    <section className="w-full bg-black p-4 text-white text-sm">
      <p>{waiting}</p>
    </section>
  );
}
