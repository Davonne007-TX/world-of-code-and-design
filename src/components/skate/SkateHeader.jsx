export default function SkateHeader() {
  const navLinks = [
    { skateLink: "2025 NSSO", id: 1 },
    { skateLink: "Rules", id: 2 },
    { skateLink: "Sponsor", id: 3 },
    { skateLink: "Q&A", id: 4 },
  ];

  return (
    <header className="text-white font-pro p-4 flex flex-row justify-between items-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl">
        National Skating Skate Off
      </h1>
      <nav>
        <ul className="hidden lg:flex gap-8 text-3xl">
          {navLinks.map((links) => (
            <li key={links.id}>{links.skateLink}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
