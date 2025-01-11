export default function Nav() {
  const myNav = [
    { link: "Consistent", id: 1 },
    { link: "Practice", id: 2 },
    { link: "Participation", id: 3 },
    { link: "Showcase", id: 4 },
  ];
  return (
    <>
      <header className="flex flex-row font-bold text-purple-600 gap-8">
        <h1 className="text-3xl">Wannaa Coode?</h1>
        <nav>
          <ul className="flex gap-8 ">
            {myNav.map((nav) => (
              <li key={nav.id}>{nav.link}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
