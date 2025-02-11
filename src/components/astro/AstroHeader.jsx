export default function AstroHeader() {
  const spaceNav = [
    { spaceLink: "Astronaut Training Session", id: 1 },
    { spaceLink: "Similations", id: 2 },
    { spaceLink: "Space Missions", id: 3 },
    { spaceLink: "Apply Now", id: 4 },
  ];

  return (
    <header className="p-4 text-white">
      <h1 className="text-7xl font-audio">Next Generation Astronaut</h1>

      <nav>
        <ul className="flex gap-12 text-2xl p-2 mt-4 font-thin">
          {spaceNav.map((nav) => (
            <li key={nav.id}>{nav.spaceLink}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
