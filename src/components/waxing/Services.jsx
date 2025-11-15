import WaxingCard from "./WaxingCard";
import { waxingServices } from "./data/waixngServices";

export default function Services() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 md:mt-0  bg-pink-100 p-8">
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
