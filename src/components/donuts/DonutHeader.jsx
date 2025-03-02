import Image from "../Image";
import Button from "../Button";

export default function DonutHeader() {
  const donutImage = "/images/donut.png";

  const myDonutNav = [
    { donutNav: "Menu", id: 1 },
    { donutNav: "About", id: 2 },
    { donutNav: "Locations", id: 3 },
    { donutNav: "Contact", id: 4 },
  ];
  return (
    <header className="p-2 flex items-center">
      <Image image={donutImage} className={"w-20"} />
      <h1 className="font-sig text-4xl md:text-5xl  tilted mt-4 text-white p-2  bg-pink-500 ml-4">
        Cozy Donuts
      </h1>

      <nav className="ml-auto p-2">
        <ul className="flex gap-8 text-2xl text-pink-500 font-glo">
          {myDonutNav.map((nav) => (
            <li key={nav.id}>{nav.donutNav}</li>
          ))}
        </ul>
      </nav>
      <Button
        btnTxt="Order Now"
        className={"text-white bg-pink-500 p-2 font-sig text-xl"}
      />
    </header>
  );
}
