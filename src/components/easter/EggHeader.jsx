export default function EggHeader() {
  const easterLinks = [
    { easterLink: "The Egg Hunt", id: 1 },
    { easterLink: "Getting Started", id: 2 },
    { easterLink: "Mission", id: 3 },
    { easterLink: "Clues", id: 4 },
    { easterLink: "Prizes", id: 5 },
  ];
  return (
    <header className="flex justify-center items-center w-full bg-linear-65 shadow-md from-pink-400 to-pink-200 ">
      <div className=" flex items-center justify-between gap-8 p-4 px-8">
        <h1 className="font-glo text-4xl">Summer Camp 2025</h1>

        <nav>
          <ul className="hidden md:flex gap-8 font-thin text-2xl">
            {" "}
            {/**add mobile nav */}
            {easterLinks.map((link) => (
              <li key={link.id}>{link.easterLink}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
