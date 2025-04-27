export default function ConcertHeader() {
  const ourHeader = [
    { link: "Tour Dates", id: 1 },
    { link: "Set List", id: 2 },
    { link: "Special Guest", id: 3 },
    { link: "Merch", id: 4 },
  ];

  return (
    <header className="text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-sed text-4xl md:text-6xl">
          2000's Takin it Back Tour
        </h1>
        <ul className="flex gap-10 font-sed text-2xl">
          {ourHeader.map((headerLink) => (
            <li key={headerLink.id}>{headerLink.link}</li>
          ))}
        </ul>
      </div>
    </header>
  );
}
