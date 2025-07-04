import React from "react";
import { ourPawStories } from "./calmPawsAwareness";

export default function PawStories() {
  return (
    <section className="p-4 max-w-xs md:max-w-2xl mx-auto">
      <div className="flex my-10 flex-col justify-center items-center gap-10">
        <h2 className="font-sig text-5xl">Paw Stories</h2>

        <div className="flex flex-col md:flex-col lg:flex-row gap-10 rounded-3xl justify-center items-center">
          {ourPawStories.map((story) => (
            <divß
              key={story.id}
              className="flex flex-col gap-10 rounded-3xl bg-blue-300 p-2"
            >
              <img src={story.image} className="max-w-sm rounded-3xl" />
              <h3 className="font-sig text-2xl md:text-3xl">{story.name}</h3>
              <p className="text-2xl">{story.story}</p>
            </divß>
          ))}
        </div>
      </div>
    </section>
  );
}
