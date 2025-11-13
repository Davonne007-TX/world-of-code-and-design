export default function WaxHeader() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Gallery", path: "/gallery" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <header className="flex justify-between items-center  p-6">
      <h1 className="font-bold text-4xl font-lobster">Silky Smooth</h1>
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.id} className="text-xl font-thin">
            {link.name}
          </li>
        ))}
      </ul>

      <button className="bg-pink-400 p-2 font-lobster text-2xl rounded cursor-pointer hover:scale-105 ">
        Book Appointment
      </button>
    </header>
  );
}
