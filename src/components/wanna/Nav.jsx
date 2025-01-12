import { useState } from "react";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const myNav = [
    { link: "Consistency", id: 1 },
    { link: "Build", id: 2 },
    { link: "Participation", id: 3 },
    { link: "Showcase", id: 4 },
  ];
  return (
    <>
      <header className="flex flex-row justify-between items-center w-full p-4 font-arc text-purple-600 gap-8 mt-4">
        <h1 className="text-5xl">Wanna Code?</h1>
        <nav>
          <ul className="hidden lg:flex gap-8 text-2xl">
            {myNav.map((nav) => (
              <li key={nav.id}>{nav.link}</li>
            ))}
          </ul>

          <button className="text-3xl lg:hidden cursor-pointer">
            {isNavOpen ? "x" : "☰"}
          </button>
        </nav>
      </header>
    </>
  );
}
