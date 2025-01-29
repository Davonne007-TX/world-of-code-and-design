import Button from "../Button";

export default function TopHeaderAimHigh() {
  const navAimHigh = [
    { aimLink: "Camp Info", id: 1 },
    { aimLink: "Player Resources", id: 3 },
    { aimLink: "Volunteer", id: 4 },
    { aimLink: "Coaching Resources", id: 5 },
    { aimLink: "Contact", id: 6 },
  ];
  return (
    <header className="p-4 flex justify-between items-center text-white ">
      <h1 className="text-5xl md:text-7xl font-orb">Aim High</h1>

      <nav>
        <ul className="hidden md:flex items-center gap-10 font-serif text-xl">
          {navAimHigh.map((nav) => (
            <li key={nav.id}>{nav.aimLink}</li>
          ))}

          <Button
            btnTxt={"Sign Up"}
            className={"bg-orange-100 w-20 p-1 rounded-full text-black"}
          />
        </ul>
      </nav>
    </header>
  );
}
