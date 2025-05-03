import Image from "../Image";

export default function BasketballHeader() {
  const tournamentLinks = [
    { ourLink: "Schedule", id: 1 },
    { ourLink: "Events", id: 2 },
    { ourLink: "Teams", id: 3 },
    { ourLink: "Coaches", id: 4 },
    { ourLink: "Players", id: 5 },
    { ourLink: "Volunteering", id: 6 },
  ];

  return (
    <header className="mt-4 w-full flex items-center justify-between px-6 font-glo text-white">
      <div className="flex items-center gap-3">
        <Image image="/images/hoop.png" className="w-12 h-12" />
        <h1 className="text-3xl lg:text-5xl font-cut font-bold">Hoops</h1>
      </div>

      <nav>
        <ul className="hidden lg:flex gap-8 text-2xl">
          {tournamentLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-white transition-colors duration-200 cursor-pointer hover:scale-105"
            >
              {link.ourLink}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
