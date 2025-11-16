import { motion } from "motion/react";

export default function WaxingCard({
  service,
  description,
  price,
  image,
  alt,
}) {
  return (
    <motion.section
      whileHover={{
        rotate: [-3, 3, -3, 3, 0],
        transition: { duration: 0.8, ease: "easeInOut" },
      }}
      animate={{ rotate: 0 }}
      className="bg-punch/70 max-w-xs cursor-pointer flex flex-col rounded-3xl shadow-lg 
    transition 
    hover:shadow-2xl 
    hover:-translate-y-1 
    duration-30 p-4 items-center gap-4"
    >
      <h2 className="font-semibold text-xl font-glo">{service}</h2>
      <p className="font-thin text-center text-lg">{description}</p>
      <img src={image} className="" alt={alt} />
      <p className="font-semibold">$From {price}</p>
    </motion.section>
  );
}
