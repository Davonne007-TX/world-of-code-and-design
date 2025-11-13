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
    <header className="flex justify-between p-4">
      <h1 className="font-bold tex-3xl">Silky Smooth</h1>
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.id}>{link.name}</li>
        ))}
      </ul>

      <button className="bg-purple-500 p-2">Book</button>
    </header>
  );
}
