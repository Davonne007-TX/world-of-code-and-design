export default function WizadrHeader() {
  const tournamentLink = [
    { chessLink: "Our Vision", id: 1 },
    { chessLink: "Rules", id: 2 },
    { chessLink: "Q&A", id: 3 },
    { chessLink: "Live Broadcast", id: 4 },
  ];

  return (
    <header className="flex justify-center items-center bg-black/10 text-white">
      <section className="p-4">
        <h1 className="text-4xl font-glo">
          Wizard Chess Tournament International
        </h1>
        <ul className="hidden md:flex justify-center items-center mt-2 gap-10 font-glo text-2xl">
          {tournamentLink.map((link) => (
            <li key={link.id}>{link.chessLink}</li>
          ))}
        </ul>
      </section>
    </header>
  );
}
