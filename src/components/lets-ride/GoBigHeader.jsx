import Contact from "./Contact";
export default function GoBigHeader() {
  const headerLinks = [
    {
      navItem: "The Crew",
      id: 1,
    },
    {
      navItem: "Events",
      id: 2,
    },
    {
      navItem: "Community",
      id: 3,
    },
    {
      navItem: "Night Riding",
      id: 4,
    },
    {
      navItem: "Competitions",
      id: 5,
    },
  ];

  return (
    <header className="p-2 w-full text-white flex justify-center items-center gap-20 backdrop-blur-md bg-black/30 shadow-md">
      <h1 className="font-orb text-5xl">Let’s Shred</h1>

      <nav className="flex justify-between items-center">
        <ul className="hidden md:flex gap-8 text-black text-xl font-rag p-2">
          {headerLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer font-tit text-white relative group"
            >
              <span className="pb-1">{link.navItem}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          <Contact />
        </ul>
      </nav>
    </header>
  );
}
