import CustomHeader from "./CustomHeader";
import Image from "../Image";

export default function BmxTopHeader() {
  const locations = "./images/location2.png";
  const account = "./images/account.jpg";
  const cart = "./images/cartIcon.png";

  const bmxLinks = [
    { link: "Bikes", id: 1 },
    { link: "Wheels", id: 2 },
    { link: "BMX Gear", id: 3 },
    { link: "BMX Parts", id: 4 },
    { link: "Deals", id: 5 },
    { link: "Merch", id: 6 },
  ];

  return (
    <header className="flex flex-col justify-center items-center w-full">
      <CustomHeader />

      <section className="relative flex items-center w-full p-10 md:p-10 lg:p-0 mt-4">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 font-pro text-3xl md:text-5xl mb-10">
          One Stop Shop
        </h1>

        <section className="hidden md:flex gap-6 ml-auto mt-2 p-2">
          <button className="flex p-1">
            Locations
            <Image image={locations} />
          </button>
          <button className="flex p-1">
            Account
            <Image image={account} />
          </button>
          <button className="flex p-1">
            Cart
            <Image image={cart} />
          </button>
        </section>
      </section>

      <ul className="hidden md:flex gap-10 -mt-4 text-xl">
        {bmxLinks.map((link) => (
          <li key={link.id}>{link.link}</li>
        ))}
      </ul>
    </header>
  );
}
