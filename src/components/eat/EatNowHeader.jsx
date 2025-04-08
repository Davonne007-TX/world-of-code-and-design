import { useState } from "react";
import Button from "../Button";
import FoodEmojis from "./FoodEmojis";

export default function EatNowHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const foodLinks = [
    { ourLink: "Top Restaurants", id: 1 },
    { ourLink: "Fast Food", id: 2 },
    { ourLink: "Catering", id: 3 },
    { ourLink: "Dessert", id: 4 },
    { ourLink: "Drinks", id: 5 },
  ];
  return (
    <header className="text-white p-8 flex justify-between ">
      <h1 className="font-sig text-5xl">Eat Now</h1>
      <button onClick={toggleMobileNav} className="text-5xl cursor-pointer">
        {" "}
        ☰
      </button>

      <nav
        className={`${
          isMobileNavOpen
            ? "flex flex-col text-3xl text-white font-sig absolute right-0 top-24 bg-red-600 p-4 rounded-3xl shadow-md"
            : "hidden"
        }`}
      >
        {foodLinks.map((links) => (
          <li
            key={links.id}
            className="list-none p-2 hover:underline cursor-pointer"
            onClick={closeMobileNav}
          >
            {links.ourLink}
          </li>
        ))}

        <FoodEmojis />

        <Button
          btnTxt={"Order Now"}
          className="bg-black text-3xl rounded-3xl mt-8 hover:scale-105"
        />
        <Button
          btnTxt={"Order Later"}
          className="bg-black text-3xl rounded-3xl mt-4 hover:scale-105"
        />
      </nav>
    </header>
  );
}
