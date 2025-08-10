import { useState } from "react";
import Button from "../Button";

export default function TacoHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ourLinks = [
    { tacoLinks: "Tacos", id: 1 },
    { tacoLinks: "Jumbo Tacos", id: 2 },
    { tacoLinks: "Specialty Tacos", id: 3 },
    { tacoLinks: "Supreme Tacos", id: 4 },
  ];

  return (
    <header className="text-white p-4 flex justify-between items-center bg-red-500/80">
      <div className="flex items-center gap-8">
        <h1 className="font-press text-5xl mb-2">🌮</h1>
        <ul className="hidden md:flex gap-8">
          {ourLinks.map((link) => (
            <li
              key={link.id}
              className="cursor-pointer hover:bg-red-700 p-2 transition-all duration-300 text-2xl rounded"
            >
              {link.tacoLinks}
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Nav */}
      <button
        className="text-4xl md:hidden cursor-pointer z-20"
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        {isNavOpen ? "✕" : "☰"}
      </button>
      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-8">
        <Button
          btnTxt="Locations"
          className="bg-red-500 hover:bg-red-700 cursor-pointer p-2 rounded-full w-40 font-press text-md"
        />
        <Button
          btnTxt="Order Now"
          className="bg-red-500 p-2 hover:bg-red-700 cursor-pointer rounded-full w-40 font-press text-md"
        />
      </div>
      {/* Mobile Nav */}
      {isNavOpen && (
        <nav className="fixed inset-0 bg-red-900/95 flex flex-col items-center justify-center gap-10 z-10 md:hidden transition-all duration-300">
          <ul className="flex flex-col gap-8 text-2xl">
            {ourLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer hover:bg-red-700 p-4 rounded transition-all duration-300"
                onClick={() => setIsNavOpen(false)}
              >
                {link.tacoLinks}
              </li>
            ))}
            <Button
              btnTxt="Locations"
              className="bg-red-500 hover:bg-red-700 hover:rounded-3xl cursor-pointer p-2 rounded-full w-60 font-press text-sm md:text-2xl"
            />
            <Button
              btnTxt="Order Now"
              className="bg-red-500 p-2 hover:bg-red-700 cursor-pointer rounded-full w-60 font-press text-sm md:text-2xl"
            />
          </ul>
        </nav>
      )}
    </header>
  );
}
