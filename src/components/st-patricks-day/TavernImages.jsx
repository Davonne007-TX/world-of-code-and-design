import Image from "../Image";

export default function TavernImages() {
  const ourImages = [
    { tavernPictures: "./images/poker.jpg", alt: "", id: 1 },
    { tavernPictures: "./images/nightToRemember.jpg", alt: "", id: 2 },
    { tavernPictures: "./images/drinkTogether.jpg", alt: "", id: 3 },
  ];

  return (
    <section className="mt-2 max-w-5xl w-full mx-auto">
      <ul className="flex flex-col md:flex-row justify-center items-center gap-4">
        {ourImages.map((images) => (
          <li key={images.id}>
            <Image
              image={images.tavernPictures}
              alt={images.alt}
              className={"max-w-md rounded-xl"}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
