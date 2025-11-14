import WaxingCard from "./WaxingCard";

export default function Services() {
  const waxingServices = [
    {
      service: "Eyebrow Waxing",
      description: "Shaped and cleaned for a stunning, natural look.",
      price: 10,
      src: "",
      id: 0,
    },
    {
      service: "Full Face",
      description:
        "Includes brows, upper lip, chin, sideburns, and cheeks for smooth, glowing skin.",
      price: 40,
      src: "",
      id: 1,
    },
    {
      service: "Arm Waxing",
      description:
        "Removes hair from forearms or full arms for a clean finish.",
      price: 15,
      src: "",
      id: 2,
    },
    {
      service: "Leg Waxing",
      description: "Soft, smooth legs you'll want to touch.",
      price: 30,
      src: "",
      id: 3,
    },
    {
      service: "Special Waxing",
      description: "For you and only you, brazilian waxing. ",
      price: 50,
      src: "",
      id: 4,
    },
    {
      service: "Underarm ",
      description: "For you and only you, brazilian waxing. ",
      price: 50,
      src: "",
      id: 5,
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center mt-40 bg-pink-100 p-8">
      <h2 className="font-glo text-4xl">Waxing Services</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-10 shadow-md p-8">
        {waxingServices.map((service) => (
          <li key={service.id}>
            <WaxingCard
              service={service.service}
              description={service.description}
              price={service.price}
              src={service.src}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
