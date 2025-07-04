import PawContact from "./PawContact";

export default function PawHeader() {
  const ourNav = [
    { link: "Our Mission", id: 1 },
    { link: "Saftey Guide", id: 2 },
    { link: "Paw Stories", id: 3 },
    { link: "Emergency Resources", id: 4 },
    { link: "Get Involved", id: 5 },
  ];
  return (
    <header className="relative text-white bg-black/80 p-4 flex flex-col justify-center items-center gap-2">
      <div className="w-full flex items-center justify-center relative">
        <div className="flex items-center gap-4 mx-auto">
          <h1 className="text-4xl md:text-5xl font-sig">Calm Paws</h1>
          <img src="./images/pawsIcon.png" className="w-16" />
        </div>
        <PawContact />
      </div>
      <nav>
        <ul className="hidden md:flex gap-8">
          {ourNav.map((nav) => (
            <li
              key={nav.id}
              className="text-2xl font-thin shadow-indigo-200 cursor-pointer p-2 hover:bg-slate-400"
            >
              {nav.link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
