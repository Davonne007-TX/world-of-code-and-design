import RetroSearch from "./RetroSearch";
import Button from "../Button";

export default function RetroHeader() {
  const retroNav = [
    { retroLink: "Nintendo", id: 1 },
    { retroLink: "Dream Cast", id: 2 },
    { retroLink: "Sega", id: 3 },
    { retroLink: "Playstation", id: 4 },
    { retroLink: "Popular Games", id: 5 },
    { retroLink: "Classic Games", id: 6 },
    { retroLink: "Deals", id: 7 },
    { retroLink: "Game Center", id: 8 },
  ];

  return (
    <header className="p-8 text-white flex flex-col gap-4">
      <section className="flex flex-col md:flex-row gap-8">
        <h1 className=" text-lg md:text-3xl font-retro">
          Blast To The Past Gaming
        </h1>
        <RetroSearch />
      </section>

      <ul className="hidden md:flex gap-8 font-thin text-xl">
        {retroNav.map((nav) => (
          <li key={nav.id}>{nav.retroLink}</li>
        ))}

        <Button
          btnTxt={"Login"}
          className={"bg-white p-1 text-black rounded"}
        />
      </ul>
    </header>
  );
}
