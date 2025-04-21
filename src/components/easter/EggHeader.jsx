export default function EggHeader() {
  const easterLinks = [
    { easterLink: "The Eggscape", id: 1 },
    { easterLink: "Getting Started", id: 2 },
    { easterLink: "Mission", id: 3 },
    { easterLink: "Clues", id: 4 },
    { easterLink: "Prizes", id: 5 },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-pink-300 via-pink-200 to-yellow-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 px-8">
        <h1 className="font-glo text-3xl md:text-4xl text-pink-800 drop-shadow-sm">
          Spring Camp <span>2025</span>
        </h1>

        <nav>
          <ul className="hidden md:flex gap-6 font-serif text-lg text-pink-700">
            {easterLinks.map((link) => (
              <li
                key={link.id}
                className="hover:text-pink-900 hover:underline hover:underline-offset-4 transition duration-300 cursor-pointer"
              >
                {link.easterLink}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
