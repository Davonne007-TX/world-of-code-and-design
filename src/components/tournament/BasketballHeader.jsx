import Image from "../Image";

export default function BasketballHeader() {
  const tournamentLinks = [
    { ourLink: "Schedule", id: 1 },
    { ourLink: "Events", id: 2 },
    { ourLink: "Teams", id: 3 },
    { ourLink: "Coaches", id: 4 },
    { ourLink: "Dunking Contest", id: 5 },
  ];
  return (
    <header className="mt-4  gap-4 flex items-center font-glo bg-white rounded-full p-2">
      <Image image="/images/hoop.png" />
      <ul className="flex gap-8 text-xl">
        {tournamentLinks.map((link) => (
          <li key={link.id}>{link.ourLink}</li>
        ))}
      </ul>
    </header>
  );
}
