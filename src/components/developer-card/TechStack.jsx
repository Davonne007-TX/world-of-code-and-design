import Image from "../Image";

export default function TechStack() {
  const javaScript = "/images/js.png";
  const reactImg = "/images/react.png";
  const css = "/images/css.png";
  const github = "/images/githubLogo.png";
  const tailwind = "/images/tailwind.webp";

  return (
    <section className="flex justify-center items-center gap-2">
      <Image
        image={reactImg}
        className="w-14"
        alt="React Logo, image by icons8"
      />
      <Image
        image={javaScript}
        className="w-14"
        alt="JavaScript Logo, image by icons8"
      />
      <Image image={css} className="w-14" alt="CSS Logo, image by icons8" />
      <Image
        image={github}
        className="w-14"
        alt="Github Logo, image by icons8"
      />
      <Image
        image={tailwind}
        className="w-14"
        alt="Tailwind CSS logo, image by icons8"
      />
    </section>
  );
}
