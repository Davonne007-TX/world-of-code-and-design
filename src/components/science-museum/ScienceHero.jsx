import Image from "../Image";

export default function ScienceHero() {
  return (
    <section className="mt-20 flex justify-center items-center">
      <Image
        image={"./images/t-rex.jpg"}
        className={"max-w-xl lg:max-w-5xl rounded-xl"}
      />
    </section>
  );
}
