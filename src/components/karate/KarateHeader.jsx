export default function KarateHeader() {
  const karateNav = [
    { karateLink: "About", id: 1 },
    { karateLink: "Programs", id: 2 },
    { karateLink: "National Tournament", id: 3 },
    { karateLink: "Gallery", id: 4 },
  ];

  return (
    <>
      <header className="p-4 font-pro flex justify-between items-center">
        <h1 className="text-4xl">Iron Fist Karate</h1>

        <nav>
          <ul className="flex gap-4 text-xl md:text-2xl ml-auto ">
            {karateNav.map((nav) => (
              <li key={nav.id}>{nav.karateLink}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
