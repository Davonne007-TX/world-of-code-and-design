import { motion } from "motion/react";

export default function GotQuestions() {
  return (
    <section className="flex flex-col justify-center items-center my-20">
      <img
        src="./images/waxpot.jpg"
        className="max-w-xs md:max-w-3xl shadow-lg"
        alt="Wax Pot, image from Grove Brands on Unsplash"
      />
      <motion.h2
        className="mt-8 text-4xl md:text-5xl font-cut"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Have questions?
      </motion.h2>
      <motion.p
        className="text-2xl md:text-3xl"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        We got you covered!
      </motion.p>
    </section>
  );
}
