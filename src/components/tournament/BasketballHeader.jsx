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
    <header className="mt-4 gap-4 flex items-center justify-between font-glo text-white">
      <Image image="/images/hoop.png" />
      <ul className="hidden md:flex gap-8 text-xl">
        {tournamentLinks.map((link) => (
          <li
            key={link.id}
            className="hover:text-white transition-colors duration-200 cursor-pointer hover:scale-105"
          >
            {link.ourLink}
          </li>
        ))}
      </ul>
    </header>
  );
}
