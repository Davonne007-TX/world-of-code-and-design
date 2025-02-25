import CustomHeader from "./CustomHeader";
import Image from "../Image";

export default function BmxTopHeader() {
  const account = "./images/account.jpg";
  const cart = "./images/cartIcon.png";

  const bmxLinks = [
    { link: "Bikes", id: 1 },
    { link: "Wheels", id: 2 },
    { link: "Racing Gear", id: 3 },
    { link: "Racing Parts", id: 4 },
    { link: "Deals", id: 5 },
  ];

  return (
    <header className="flex flex-col justify-center items-center w-full">
      <CustomHeader />

      <section className="relative flex items-center w-full p-2">
        <h1 className="absolute left-1/2 transform -translate-x-1/2 font-pro text-5xl">
          One Stop Shop
        </h1>

        <section className="flex gap-4 ml-auto mt-4 p-2">
          <button className="flex">
            Account
            <Image image={account} />
          </button>
          <button className="flex">
            Cart
            <Image image={cart} />
          </button>
        </section>
      </section>

      <ul className="flex gap-10 mt-2 text-xl">
        {bmxLinks.map((link) => (
          <li key={link.id}>{link.link}</li>
        ))}
      </ul>
    </header>
  );
}
