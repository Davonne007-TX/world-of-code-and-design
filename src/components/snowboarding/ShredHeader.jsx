import Contact from "./Contact";
export default function ShredHeader() {
  const headerLinks = [
    {
      navItem: "Moutain Info",
      id: 1,
    },
    {
      navItem: "Trails",
      id: 2,
    },
    {
      navItem: "Lessons and Camps",
      id: 3,
    },
    {
      navItem: "Dining",
      id: 4,
    },
    {
      navItem: "Night Riding",
      id: 5,
    },
    {
      navItem: "Competitions",
      id: 5,
    },
  ];

  return (
    <header className=" p-2 text-white flex flex-col gap-2 backdrop-blur-md bg-black/30 shadow-md">
      <div className="flex justify-between items-center bg-black/40 p-2">
        <h1 className="font-orb text-5xl">Shred Summit</h1>
        <Contact />
      </div>
      <nav className="flex">
        <ul className="hidden md:flex gap-10 text-black text-2xl font-rag p-2">
          {headerLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer font-tit relative group"
            >
              <span className="pb-1">{link.navItem}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
