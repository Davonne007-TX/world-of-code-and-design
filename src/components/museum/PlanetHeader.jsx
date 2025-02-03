export default function PlanetHeader() {
  const planetSections = [
    { planetLink: "History", id: 1 },
    { planetLink: "Exhibits", id: 2 },
    { planetLink: "Events", id: 3 },
    { planetLink: "Locations & Hours", id: 4 },
    { planetLink: "Tickets", id: 5 },
  ];

  const planetIcon = "/images/planetIcon.png";
  return (
    <header className=" bg-black/100 text-white text-2xl">
      <div className="flex items-center justify-between w-full p-2">
        <h1 className="text-4xl font-cut flex-grow ml-2 md:ml-10">
          Cosmos Discovery Museum
        </h1>
        <img
          src={planetIcon}
          className={"w-10 ml-auto"}
          alt={"Planet Icon by Icons8"}
        />
      </div>
      <nav className="flex gap-4 flex-grow mt-4 cursor-pointer">
        {planetSections.map((sections) => (
          <li
            key={sections.id}
            className=" ml-2 md:ml-10 hover:underline list-none p-2"
          >
            {sections.planetLink}
          </li>
        ))}
      </nav>
    </header>
  );
}
