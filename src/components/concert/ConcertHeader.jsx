export default function ConcertHeader() {
  const ourHeader = [
    { link: "Tour Dates", id: 1 },
    { link: "Special Guest", id: 2 },
    { link: "Merch", id: 3 },
    { link: "Get Tickets", id: 3 },
  ];

  return (
    <header className="text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-sed text-4xl md:text-6xl">
          2000's Takin it Back Tour
        </h1>
        <ul className="flex gap-10 font-sed text-2xl">
          {ourHeader.map((headerLink) => (
            <li
              key={headerLink.id}
              className="cursor-pointer hover:bg-slate-500 rounded p-2"
            >
              {headerLink.link}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
