export default function LetsRideHeader() {
  const letsRideLinks = [
    { rideLinks: "Services", id: 1 },
    { rideLinks: "Shop", id: 2 },
    { rideLinks: "Parts", id: 3 },
    { rideLinks: "Account", id: 4 },
    { rideLinks: "Contact", id: 5 },
  ];
  return (
    <header className="w-full font-pro mt-8">
      <nav className="flex justify-center gap-10 items-center">
        <h1 className="text-4xl">Let's Ride</h1>
        <ul className=" hidden md:flex md:flex-row md: gap-10 lg:gap-20 justify-between items-center">
          {letsRideLinks.map((link) => (
            <li key={link.id} className="text-black text-2xl">
              {link.rideLinks}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
