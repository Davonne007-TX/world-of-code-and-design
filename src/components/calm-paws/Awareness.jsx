import Image from "../Image";
import { calmPawsAwareness } from "./calmPawsAwareness";

export default function PawStories() {
  return (
    <section className="flex flex-col justify-center items-center mt-20">
      {calmPawsAwareness.map((awareness) => (
        <section
          key={awareness.id}
          className="flex flex-col my-12 md:my-20 gap-10 p-4 max-w-2xs md:max-w-3xl lg:max-w-3xl bg-white/80 rounded-xl shadow-lg"
        >
          <h2 className="font-sig text-5xl">{awareness.heading}</h2>
          <p className="text-2xl leading-10">{awareness.text}</p>
          <p className="text-2xl leading-10">{awareness.moreText}</p>
          <Image
            image={awareness.image}
            className="max-w-2xs md:max-w-sm lg:max-w-2xl rounded"
          />
        </section>
      ))}
    </section>
  );
}
