import Button from "../Button";

export default function TacoHeader() {
  const ourLinks = [
    { tacoLinks: "Tacos", id: 1 },
    { tacoLinks: "Jumbo Tacos", id: 2 },
    { tacoLinks: "Specialty Tacos", id: 3 },
    { tacoLinks: "Supreme Tacos", id: 4 },
  ];

  return (
    <header className="text-white p-8 flex justify-between items-center bg-red-500/80">
      <div className="flex items-center gap-8">
        <h1 className="font-press text-5xl">🌮</h1>
        <nav>
          <ul className="flex gap-8">
            {ourLinks.map((link) => (
              <li
                key={link.id}
                className="hidden cursor-pointer hover:bg-red-700 p-2 transition-all duration-300  md:flex text-2xl"
              >
                {link.tacoLinks}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-8">
        <Button
          btnTxt="Locations"
          className="bg-red-500 hover:bg-red-700 cursor-pointer p-2 rounded-full w-40 font-press text-md"
        />
        <Button
          btnTxt="Order Now"
          className="bg-red-500 p-2 hover:bg-red-700  cursor-pointer rounded-full w-40 font-press text-md"
        />
      </div>
    </header>
  );
}
