export default function WaxHeader() {
  const navLinks = [
    { name: "About", path: "/about", id: 0 },
    { name: "Services", path: "/services", id: 1 },
    { name: "Pricing", path: "/pricing", id: 2 },
    { name: "Gallery", path: "/gallery", id: 3 },
    { name: "FAQs", path: "/faqs", id: 4 },
    { name: "Contact", path: "/contact", id: 5 },
  ];
  return (
    <header className="flex justify-between items-center  p-6">
      <h1 className="font-bold text-4xl font-cut">Silky Smooth</h1>
      <ul className="hidden lg:flex gap-8">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-xl font-thin cursor-pointer rounded-2xl hover:bg-linear-to-r from candy to-candy p-2"
          >
            {link.name}
          </li>
        ))}
      </ul>

      <button className="bg-candy text-white p-2 font-cut text-2xl  cursor-pointer hover:scale-105 ">
        Book Appointment
      </button>
    </header>
  );
}
