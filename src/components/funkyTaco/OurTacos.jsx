export default function OurTacos() {
  const ourTacos = [
    { tacoImage: "./images/taco1.jpg", id: 1, alt: "" },
    { tacoImage: "./images/taco2.jpg", id: 2, alt: "" },
    { tacoImage: "./images/tacos3.jpg", id: 3, alt: "" },
    { tacoImage: "./images/tacos4.jpg", id: 4, alt: "" },
  ];

  return (
    <section className=" mt-20 flex flex-col justify-center items-center">
      <h2 className="font-press text-4xl md:text-5xl text-blue-600">Tacos</h2>
    </section>
  );
}
