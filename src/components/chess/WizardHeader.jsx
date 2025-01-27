import Image from "../Image";
import WizardButtons from "./WizardButtons";

export default function WizardHeader() {
  const tournamentLink = [
    { chessLink: "Our Vision", id: 1 },
    { chessLink: "Rules", id: 2 },
    { chessLink: "Q&A", id: 3 },
    { chessLink: "Live Broadcast", id: 4 },
  ];

  const blackSearch = "./images/blackSearch.png";

  return (
    <header className="flex flex-col p-2 bg-black/75 text-white">
      <section className="flex items-center justify-between w-full p-4 flex-wrap gap-2">
        <h1 className="text-2xl sm:text-4xl font-glo flex-grow text-center sm:text-left">
          Wizard Chess Tournament
        </h1>
        <div className="mx-auto flex mt-2 gap-2">
          <input
            type="search"
            className="bg-white p-2 rounded-full outline-none text-black"
            placeholder="Search..."
          />
          <Image
            image={blackSearch}
            className="w-6 h-6 mt-2 cursor-pointer"
            alt="Search Icon, icon by Icons8"
          />

          <WizardButtons />
        </div>
      </section>

      <ul className="hidden md:flex mt-2 ml-4 p-2 gap-10 font-glo text-lg sm:text-2xl">
        {tournamentLink.map((link) => (
          <li key={link.id} className="hover:underline">
            {link.chessLink}
          </li>
        ))}
      </ul>
    </header>
  );
}
