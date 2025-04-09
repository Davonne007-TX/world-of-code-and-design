import Button from "../Button";

export default function TacoHeader() {
  const ourLinks = [
    { tacoLinks: "Tacos", id: 1 },
    { tacoLinks: "Jumbo Tacos", id: 2 },
    { tacoLinks: "Speciality Tacos", id: 3 },
    { tacoLinks: "Surpreme Tacos", id: 4 },
  ];

  return (
    <header className="w-full p-4 text-white flex">
      <div className="flex flex-col justify-between gap-4">
        <h1 className="font-press text-3xl">Did Someone Say Tacos?</h1>
        <nav>
          <ul className="flex gap-8">
            {ourLinks.map((link) => (
              <li key={link.id} className=" hidden md:flex text-2xl">
                {link.tacoLinks}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Button
        btnTxt="Order Now"
        className="bg-red-500 ml-auto w-20 p-2 rounded font-press text-sm"
      />
    </header>
  );
}
