export default function RetroHeader() {
  const retroNav = [
    { retroLink: "Nintendo", id: 1 },
    { retroLink: "Dream Cast", id: 2 },
    { retroLink: "Sega", id: 3 },
    { retroLink: "Playstation", id: 4 },
    { retroLink: "Popular Games", id: 5 },
    { retroLink: "Classic Games", id: 6 },
  ];

  return (
    <header className="p-8 text-white flex flex-col justify-between items-center gap-4">
      <h1 className=" text-4xl font-retro">Retro Tech</h1>

      <ul className="flex gap-10 font-bold text-xl">
        {retroNav.map((nav) => (
          <li key={nav.id}>{nav.retroLink}</li>
        ))}
      </ul>
    </header>
  );
}
