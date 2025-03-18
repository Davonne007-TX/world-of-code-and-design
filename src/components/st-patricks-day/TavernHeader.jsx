import Image from "../Image";
import Socials from "./Socials";

export default function TavernHeader() {
  const tavernLinks = [
    { ourLinks: "Menu", id: 1 },
    { ourLinks: "Deals", id: 2 },
    { ourLinks: "Drink Specials", id: 3 },
    { ourLinks: "Gallery", id: 4 },
    { ourLinks: "Online Ordering", id: 5 },
    { ourLinks: "Locations", id: 6 },
  ];

  const clover = "./images/clover.png";

  return (
    <header className="flex justify-center items-center gap-4 p-4 w-full">
      <Image
        image={clover}
        alt="Four Leaf clover, Icon by Icons8"
        className="font-4xl"
      />
      <section className="">
        <h1 className="text-4xl font-bold">Shamarock Tavern</h1>
        <nav>
          <ul className="hidden md:flex gap-8 font-serif text-lg mt-2">
            {tavernLinks.map((link) => (
              <li key={link.id}>{link.ourLinks}</li>
            ))}
          </ul>
        </nav>
      </section>
      <Socials />
    </header>
  );
}
