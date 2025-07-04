import Image from "../Image";
import { calmPawsAwareness } from "./calmPawsAwareness";

export default function Awareness() {
  return (
    <section className="flex flex-col justify-center items-center mt-20">
      {calmPawsAwareness.map((awareness) => (
        <>
          <section className="flex flex-col gap-4 p-4 max-w-xs md:max-w-2xl">
            <h2 className="font-sig text-5xl">{awareness.heading}</h2>
            <p className="text-2xl leading-10">{awareness.text}</p>

            <Image
              image={awareness.image}
              className="max-w-2xs md:max-w-2xl mx-auto rounded"
            />
          </section>
        </>
      ))}
    </section>
  );
}
