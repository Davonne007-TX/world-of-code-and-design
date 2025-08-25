import Image from "../Image";

export default function TopHeader() {
  const navLinks = [
    { ourLink: "Book", id: 1 },
    { ourLink: "Plan", id: 2 },
    { ourLink: "Deals", id: 3 },
    { ourLink: "Check Reservation", id: 4 },
    { ourLink: "Customer Service", id: 5 },
  ];

  const plane = "/images/plane.png";

  return (
    <header className="text-white font-serif font-thin w-full p-4">
      <nav className="cursor-pointer relative mt-2">
        <div className="flex justify-center items-center">
          <Image
            image={plane}
            className={"w-10 h-auto absolute left-0 mt-4 lg:mt-0 "}
            alt={"Airplane Logo, Plane icon by Icons8"}
          />

          <h1 className="absolute left-10 ml-2 mt-2 lg:mt-0 text-2xl">Soar</h1>

          <ul className="hidden lg:flex justify-between gap-8 items-center text-lg">
            {navLinks.map((link) => (
              <li key={link.id} className="hover:underline ">
                {link.ourLink}
              </li>
            ))}
          </ul>

          <button className="text-4xl absolute right-0 cursor-pointer mt-2 md:mt-0">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
