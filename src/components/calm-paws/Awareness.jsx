import React from "react";
import Image from "../Image";
import { calmPawsAwareness } from "./calmPawsAwareness";

export default function Awareness() {
  return (
    <section className="flex flex-col justify-center  items-center mt-20">
      {calmPawsAwareness.map((awareness) => (
        <React.Fragment key={awareness.id}>
          <section
            key={awareness.id}
            className="flex my-10 flex-col gap-10 p-4 max-w-2xs lg:max-w-2xl"
          >
            <h2 className="font-sig text-5xl">{awareness.heading}</h2>
            <p className="text-2xl leading-10">{awareness.text}</p>
            <p className="text-2xl leading-10">{awareness.moreText}</p>
            <Image
              image={awareness.image}
              className="max-w-2xs md:max-w-sm lg:max-w-2xl rounded"
            />

            <hr className="mt-20" />
          </section>
        </React.Fragment>
      ))}
    </section>
  );
}
