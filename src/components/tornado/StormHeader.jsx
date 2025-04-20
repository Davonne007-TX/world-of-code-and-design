import Image from "../Image";
import Live from "./Live";

export default function StromHeader() {
  const navLinks = [
    { ourLink: "Mission", id: 1 },
    { ourLink: "Preparedness", id: 2 },
    { ourLink: "Storm Relief", id: 3 },
    { ourLink: "Storm Shelters Locations", id: 4 },
    { ourLink: "Alerts", id: 5 },
  ];

  return (
    <>
      <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white shadow-lg w-full py-4 px-6">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            <Image
              image="/images/alert.png"
              className="w-14 h-14 drop-shadow-md"
            />
            <h1 className="text-3xl md:text-4xl font-bold tracking-wide text-white drop-shadow-sm">
              <span className="text-red-500">Stay Alert</span> Storm Chasing
            </h1>
          </div>

          <nav className="ml-auto">
            <ul className="hidden lg:flex gap-8 text-lg font-semibold">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="relative cursor-pointer hover:text-red-400 transition duration-300"
                >
                  {link.ourLink}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Live />
    </>
  );
}
