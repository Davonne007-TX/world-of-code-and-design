import Button from "../Button";
import { ShoppingCart } from "lucide-react";

export default function FriesHeader() {
  const navLinks = [
    { navLink: "Menu", id: 0 },
    { navLink: "Specials", id: 1 },
    { navLink: "Locations", id: 2 },
    { navLink: "Jobs", id: 3 },
    { navLink: "Catering", id: 3 },
  ];

  return (
    <header className="p-4 bg-yellow-300">
      <div className="p-2 flex flex-col md:flex-row justify-between gap-8">
        <h1 className="font-grav text-4xl bg-black skew-2 w-80  text-white p-2">
          Cheese This
        </h1>
        <nav>
          <ul className="flex gap-8 mr-40 mt-8 md:mt-4 font-grav">
            {navLinks.map((link) => (
              <li key={link}>{link.navLink}</li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-10">
          <Button btnTxt="Sign In" className="font-thin text-xl" />
          <button className="bg-black flex justify-center items-center text-white font-thin text-xl p-2 w-40 rounded-full">
            Order Now <ShoppingCart className="ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
}
