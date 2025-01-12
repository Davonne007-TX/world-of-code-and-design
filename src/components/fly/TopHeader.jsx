export default function TopHeader() {
  const navigationLinks = [
    { ourLink: "Book", id: 1 },
    { ourLink: "Reservation", id: 2 },
    { ourLink: "Delays", id: 3 },
    { ourLink: "Deals", id: 4 },
    { ourLink: "Check In", id: 5 },
    { ourLink: "Contact", id: 6 },
  ];

  return (
    <header className="text-white font-bold font-serif w-full p-4">
      <nav className="flex justify-center items-center gap-8">
        <h1 className="text-6xl">Fly With Us</h1>

        <ul className="hidden lg:flex gap-8 text-xl">
          {navigationLinks.map((links) => (
            <li key={links.id}>{links.ourLink}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
