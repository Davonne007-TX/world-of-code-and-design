export default function LetsRideHeader() {
  const letsRideLinks = [
    { rideLinks: "Services", id: 1 },
    { rideLinks: "Shop", id: 2 },
    { rideLinks: "Parts", id: 3 },
    { rideLinks: "Account", id: 4 },
    { rideLinks: "Contact", id: 35 },
  ];
  return (
    <header className="w-full font-pro">
      <nav className="flex justify-center gap-10 items-center">
        <h1 className="text-4xl">Let's Ride</h1>
        <ul className="flex flex-row gap-20 justify-between items-center">
          {letsRideLinks.map((link) => (
            <li key={link.id} className="text-black">
              {link.rideLinks}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
