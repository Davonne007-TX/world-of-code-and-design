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
      <nav className="cursor-pointer relative">
        <div className="flex justify-center items-center">
          <Image
            image={plane}
            className={"w-10 h-auto absolute left-0 mt-4 lg:mt-0"}
          />

          <ul className="hidden lg:flex justify-between gap-8 items-center text-lg">
            {navLinks.map((link) => (
              <li key={link.id} className="hover:underline ">
                {link.ourLink}
              </li>
            ))}
          </ul>

          <button className="text-4xl absolute right-0 cursor-pointer">
            ☰
          </button>
        </div>
      </nav>
      <h2 className="text-6xl md:text-7xl lg:text-8xl mt-26 lg:mt-20">
        Fly With Us Today
      </h2>
    </header>
  );
}
