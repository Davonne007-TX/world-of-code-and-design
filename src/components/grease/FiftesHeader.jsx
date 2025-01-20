export default function FiftesHeader() {
  const fiftesNav = [
    { ourLink: "Shop", id: 1 },
    { ourLink: "Gallery", id: 2 },
    { ourLink: "Classics", id: 3 },
    { ourLink: "Dealers", id: 4 },
  ];

  return (
    <nav className="flex gap-8 justify-center items-center font-orb text-white">
      <ul className="text-xl flex gap-10 mt-4 font-bold  bg-pink-800 p-4 rounded-full opacity-75">
        <h1 className="md:text-3xl">Systematic</h1>
        {fiftesNav.map((nav) => (
          <li key={nav.id} className="lg:mt-2">
            {nav.ourLink}
          </li>
        ))}
      </ul>
    </nav>
  );
}
