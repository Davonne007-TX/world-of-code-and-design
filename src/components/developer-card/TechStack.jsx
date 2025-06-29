import Image from "../Image";

export default function TechStack() {
  const techStackImages = [
    { name: "JavaScript", src: "/images/js.png", id: 1 },
    { name: "React", src: "/images/react.png", id: 2 },
    { name: "CSS", src: "/images/css.png", id: 3 },
    { name: "GitHub", src: "/images/githubLogo.png", id: 4 },
    { name: "Tailwind", src: "/images/tailwind.webp", id: 5 },
  ];

  return (
    <section className="flex justify-center items-center gap-2">
      {techStackImages.map((images) => (
        <Image key={images.id} image={images.src} className="w-14" />
      ))}
    </section>
  );
}
