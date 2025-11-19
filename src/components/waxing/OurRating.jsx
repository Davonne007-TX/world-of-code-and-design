import { reviews } from "./data/reviews";
import Rating from "@mui/material/Rating";
import { motion } from "motion/react";
import { useState } from "react";

export default function OurRating() {
  const [value, setValue] = useState(5);

  return (
    <section className="max-w-6xl p-8 mx-auto">
      <div className="flex flex-col justify-center items-center gap-4 text-center my-10">
        <h2 className="mt-8 text-3xl md:text-4xl font-bold font-glo">
          What Our Guests Have to Say
        </h2>
        <p className="text-lg md:text-2xl">
          We aim high to meet your beauty needs
        </p>

        <ul className="flex flex-col lg:flex-row justify-center items-center mt-10 gap-12 font-thin text-xl">
          {reviews.map((review, i) => (
            <motion.li
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white shadow-md cursor-pointer hover:scale-105 rounded-2xl p-6 max-w-xs flex flex-col items-center text-center gap-4"
            >
              <img
                src={review.src}
                alt={review.id}
                className="w-24 h-24 rounded-full shadow-md"
              />

              <p>{review.review}</p>
              <Rating
                name={`rating-${review.id}`}
                defaultValue={value}
                readOnly
              />
              <p className="font-bold">{review.name}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
