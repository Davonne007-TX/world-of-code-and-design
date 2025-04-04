export default function GoldHeader() {
  const pursuitLinks = [
    { noExcuses: "Pledge", id: 1 },
    { noExcuses: "The Struggle is Real", id: 2 },
    { noExcuses: "SMART Goals", id: 3 },
    { noExcuses: "Resources", id: 4 },
    { noExcuses: "Community", id: 5 },
  ];

  return (
    <header className="bg-green-600 text-white p-2 font-audio  l ">
      <h1 className="text-4xl">The Pursuit</h1>
      <nav>
        <ul className="hidden flex-col md:flex-row gap-10 text-xl mt-4">
          {pursuitLinks.map((links) => (
            <li key={links.id}>{links.noExcuses}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
