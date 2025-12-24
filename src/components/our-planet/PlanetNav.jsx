export default function PlanetNav() {
  const navigationLinks = [
    { name: "The Situation", id: 0 },
    { name: "History", id: 1 },
    { name: "The Science", id: 3 },
    { name: "Our Solutions", id: 4 },
  ];
  return (
    <header className="fixed flex justify-between items-center top-0 left-0 right-0 z-50  w-full border-1 border-t-blue-400 border-b-blue-400 p-6 bg-black  bg-background/80 backdrop-blur-md">
      <h1 className="text-4xl text-white font-mono">WONKRU</h1>
      <ul className="text-lg hidden md:flex gap-8 items-center text-gray-200">
        {navigationLinks.map((links) => (
          <li key={links.id}>{links.name}</li>
        ))}
        <button className="bg-blue-400 text-center flex items-center text-white p-2">
          Take Action
        </button>
      </ul>
    </header>
  );
}
