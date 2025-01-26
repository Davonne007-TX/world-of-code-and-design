import Image from "../Image";
import Button from "../Button";

export default function ArcadeHeader() {
  const joystick = "./images/joyStick.png";

  const arcadeLinks = [
    { arcadeLink: "About", id: 1 },
    { arcadeLink: "Games", id: 2 },
    { arcadeLink: "Food", id: 3 },
    { arcadeLink: "Beer", id: 4 },
    { arcadeLink: "Book a Party", id: 5 },
  ];

  const contact = "Contact";

  return (
    <header className="p-4 w-ful font-orb bg-fuchsia-400 flex justify-between items-center">
      <div className="flex items-center">
        <Image image={joystick} />
        <h1 className="text-2xl md:text-3xl p-2">Time Machine Arcade</h1>
      </div>
      <nav>
        <ul className="flex items-center gap-8">
          {arcadeLinks.map((link) => (
            <li
              key={link.id}
              className="hidden hover:underline cursor-pointer text-xl lg:flex ml-auto gap-10"
            >
              {link.arcadeLink}
            </li>
          ))}

          <Button btnTxt={contact} className={"text-xl bg-white p-2 rounded"} />
        </ul>
      </nav>
    </header>
  );
}
