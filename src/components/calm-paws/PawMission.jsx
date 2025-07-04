import Image from "../Image";

export default function PawMission() {
  const dog1 = "./images/dogDuo.jpg";
  return (
    <section className="flex flex-col justify-center items-center mt-20">
      <div className="flex flex-col gap-4 p-4 max-w-xs md:max-w-2xl">
        <h2 className="font-sig text-5xl">Our Mission</h2>
        <p className="text-2xl leading-10">
          At Calm Paws, our mission is to raise awareness about the impact
          fireworks have on dogs and other pets. While fireworks bring joy and
          celebration to many, they can cause overwhelming stress, fear, and
          even harm to our furry family members. Through education, resources,
          and compassionate advocacy, we aim to help communities celebrate more
          mindfully—ensuring that every member of the family, paws included, can
          feel safe, calm, and cared for.
        </p>
        <Image
          image={dog1}
          className="max-w-2xs  md:max-w-2xl mx-auto rounded"
        />
      </div>
    </section>
  );
}
