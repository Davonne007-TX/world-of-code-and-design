export default function PlanetHeader() {
  const planetSections = [
    { planetLink: "History", id: 1 },
    { planetLink: "Exhibits", id: 2 },
    { planetLink: "Events", id: 3 },
    { planetLink: "Tickets", id: 4 },
  ];
  return (
    <header className=" bg-black text-white flex flex-col justify-between items-center text-2xl">
      <ul className="p-2">
        <h1 className="text-center text-3xl font-orb">
          Cosmos Discovery Museum
        </h1>
        <nav className="flex justify-between items-center gap-4 mt-4">
          {planetSections.map((sections) => (
            <li key={sections.id}>{sections.planetLink}</li>
          ))}
        </nav>
      </ul>
    </header>
  );
}
