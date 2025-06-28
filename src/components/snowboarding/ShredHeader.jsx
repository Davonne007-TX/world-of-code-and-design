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
  ];

  return (
    <header className=" p-2 text-white flex justify-between items-center">
      <h1 className="font-bold text-5xl">Shred Summit</h1>

      <nav>
        <ul>
          {headerLinks.map((link) => (
            <li key={link.id}>{link.navItem}</li>
          ))}
        </ul>

        <div className="">
          <button>Contact</button>
          <button>Login</button>
        </div>
      </nav>
    </header>
  );
}
