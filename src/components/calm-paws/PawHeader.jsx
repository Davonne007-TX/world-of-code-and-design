export default function PawHeader() {
  const ourNav = [
    { link: "Our Mission", id: 1 },
    { link: "Get Involved", id: 2 },
    { link: "Paw Stories", id: 3 },
    { link: "Safety Guide", id: 4 },
    { link: "Emergency Resources", id: 5 },
  ];
  return (
    <header className="text-white bg-black/20 p-4 flex flex-col justify-center items-center gap-2">
      <div className="flex gap-4">
        <h1 className="text-4xl md:text-5xl font-sig">Calm Paws</h1>
        <img src="./images/pawsIcon.png" className="w-16" />
      </div>
      <nav>
        <ul className="hidden md:flex gap-8">
          {ourNav.map((nav) => (
            <li
              key={nav.id}
              className="text-2xl font-thin shadow-indigo-200 cursor-pointer p-2 hover:bg-slate-400"
            >
              {nav.link}{" "}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
