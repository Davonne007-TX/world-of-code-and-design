export default function Nav() {
  const navList = [
    { navLink: "Plan", id: 1 },
    { navLink: "Action", id: 2 },
    { navLink: "Maps", id: 3 },
    { navLink: "Tunnels", id: 4 },
    { navLink: "Contact", id: 5 },
  ];

  return (
    <>
      <nav className="flex gap-8 justify-center items-center text-white">
        <h1 className="mt-4 text-3xl">Save Humanity</h1>
        <ul className="text-xl flex gap-4 mt-4">
          {navList.map((list) => (
            <li key={list.id}>{list.navLink}</li>
          ))}
        </ul>
      </nav>
    </>
  );
}
