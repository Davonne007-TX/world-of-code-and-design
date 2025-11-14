import WaxingCard from "./WaxingCard";

export default function Services() {
  const waxingServices = [
    {
      service: "Eyebrow Waxing",
      description: "Shaped and cleaned for a stunning, natural look.",
      price: 10,
      src: "./images/eyebrows1.png",
    },
    {
      service: "Full Face",
      description: "Waxing for your full face, for smooth, glowing skin.",
      price: 30,
      src: "./images/face1.png",
      id: 1,
    },
    {
      service: "Arm Waxing",
      description:
        "Removes hair from forearms or full arms for a clean finish.",
      price: 35,
      src: "./images/arm.png",
      id: 2,
    },
    {
      service: "Leg Waxing",
      description: "Soft, smooth legs you'll want to touch.",
      price: 35,
      src: "./images/legs.png",
      id: 3,
    },
    {
      service: "Special Waxing",
      description: "For you. Bikini Line, Full and Brazilian.",
      price: 50,
      src: "./images/heart1.png",
      id: 4,
    },
    {
      service: "Underarm Waxing",
      description: "Say goodbye to dark underarms! ",
      price: 15,
      src: "/images/underarms1.png",
      id: 5,
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center mt-40 bg-pink-100 p-8">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="font-glo text-4xl">Waxing Services</h2>
        <p className="max-w-2xl text-center font-thi text-xl">
          Book your favorite service today and enjoy a special treat on us! With
          our exclusive wax, we will give you an experience you will never
          forget.
        </p>
        <button className="p-2 w-80 font-bold bg-punch rounded-full font-cut cursor-pointer text-xl transition-all duration-300 hover:scale-105">
          View all services
        </button>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 shadow-md p-8">
        {waxingServices.map((service) => (
          <li key={service.id}>
            <WaxingCard
              service={service.service}
              description={service.description}
              price={service.price}
              src={service.src}
              image={service.src}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
