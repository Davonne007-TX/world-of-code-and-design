export default function SummerHeader() {
  const summerLinks = [
    { link: "Community Events", id: 1 },
    { link: "Social Hour", id: 2 },
    { link: "Sporting Tournaments", id: 3 },
    { link: "Concert List", id: 4 },
  ];

  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white/10 backdrop-blur-md text-white z-20 relative rounded-b-xl shadow-md">
      <h1 className="font-bold font-ram text-4xl md:text-5xl tracking-wide">
        ☀️ Summer Vibes
      </h1>

      <nav>
        <ul className="hidden md:flex gap-8 font-serif text-base md:text-2xl">
          {summerLinks.map((item) => (
            <li
              key={item.id}
              className=" rounded-full   hover:bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-400 p-2 transition duration-200 cursor-pointer"
            >
              {item.link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
