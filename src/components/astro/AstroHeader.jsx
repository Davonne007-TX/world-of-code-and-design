export default function AstroHeader() {
  const spaceNav = [
    { spaceLink: "Astronaut Training", id: 1 },
    { spaceLink: "Simulations", id: 2 },
    { spaceLink: "Space Missions", id: 3 },
    { spaceLink: "FAQ", id: 4 },
  ];

  const resources = [
    { resource: "About Us ↗", id: 5 },
    { resource: "Resources ↗", id: 6 },
    { resource: "Blog ↗", id: 7 },
    { resource: "Community ↗", id: 8 },
    { resource: "Contact ↗", id: 9 },
  ];

  return (
    <header className="text-white bg-black/60 w-full py-4">
      <section className="flex justify-between items-center px-4">
        <h1 className="text-3xl md:text-4xl font-audio">
          Next Generation Astronaut
        </h1>
        <ul className="ml-auto mt-4 hidden md:flex gap-4 text-xl cursor-pointer">
          {resources.map((source) => (
            <li key={source.id} className="hover:text-gray-300 transition">
              {source.resource}
            </li>
          ))}
        </ul>
      </section>

      <nav>
        <ul className="flex flex-col md:flex-row ml-4 mt-2 gap-8 text-xl font-thin py-2  cursor-pointer">
          {spaceNav.map((nav) => (
            <li key={nav.id} className="hover:text-gray-300 transition">
              {nav.spaceLink}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
