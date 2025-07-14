import { motion } from "motion/react";
import { ourPawStories } from "./calmPawsAwareness";

export default function PawStories() {
  return (
    <section className="p-4 max-w-2xs md:max-w-2xl mx-auto">
      <div className="flex my-10 flex-col justify-center items-center gap-10">
        <h2 className="font-sig text-5xl">Paw Stories</h2>

        <div className="flex flex-col md:flex-col lg:flex-row gap-20 md:gap-10 rounded-3xl justify-center items-center">
          {ourPawStories.map((story) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              key={story.id}
              className="flex flex-col gap-4 bg-blue-400 border-2 border-black rounded-3xl"
            >
              <img
                src={story.image}
                className="max-w-3xs md:max-w-2xl mx-auto lg:max-w-sm rounded-3xl p-2"
              />

              <p className="text-2xl p-2">{story.story}</p>
              <h3 className="font-sig ml-auto p-2 text-2xl md:text-3xl">
                - {story.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
