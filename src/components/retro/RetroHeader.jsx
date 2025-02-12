import RetroSearch from "./RetroSearch";

export default function RetroHeader() {
  const retroNav = [
    { retroLink: "Nintendo", id: 1 },
    { retroLink: "Dream Cast", id: 2 },
    { retroLink: "Sega", id: 3 },
    { retroLink: "Playstation", id: 4 },
    { retroLink: "Popular Games", id: 5 },
    { retroLink: "Classic Games", id: 6 },
    { retroLink: "Deals", id: 7 },
  ];

  return (
    <header className="p-8 text-white flex flex-col gap-4">
      <section className="flex gap-8">
        <h1 className=" text-2xl font-retro">Blast To The Past Gaming</h1>
        <RetroSearch />
      </section>

      <ul className="flex gap-10 font-bold text-xl">
        {retroNav.map((nav) => (
          <li key={nav.id}>{nav.retroLink}</li>
        ))}
      </ul>
    </header>
  );
}
