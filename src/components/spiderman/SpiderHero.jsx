import Image from "../Image";

export default function SpiderHero() {
  const spidermanImage = "./images/spiderman.jpg";
  return (
    <section className="flex justify-center items-center mt-60">
      <Image image={spidermanImage} className={"max-w-sm "} />
    </section>
  );
}
