import { useState } from "react";

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
    { ourLink: "Coffee", id: 5 },
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
            ? "flex flex-col text-3xl text-white font-sig absolute right-0 top-24 bg-red-600 p-4 rounded-2xl"
            : "hidden"
        }`}
      >
        {foodLinks.map((links) => (
          <li key={links.id} className="list-none p-2" onClick={closeMobileNav}>
            {links.ourLink}
          </li>
        ))}
      </nav>
    </header>
  );
}
