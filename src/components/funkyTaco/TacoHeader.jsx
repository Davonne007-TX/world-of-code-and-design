import Button from "../Button";

export default function TacoHeader() {
  const ourLinks = [
    { tacoLinks: "Tacos", id: 1 },
    { tacoLinks: "Jumbo Tacos", id: 2 },
    { tacoLinks: "Speciality Tacos", id: 3 },
    { tacoLinks: "Surpreme Tacos", id: 4 },
  ];

  return (
    <header className="p-4 text-white flex justify-center items-center">
      <div className="flex flex-col justify-between  w-full gap-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-press text-3xl ">Did Someone Say Tacos?</h1>
          <Button
            btnTxt="Order Now"
            className="bg-red-500 p-2 justtify-end rounded-full w-40  font-press text-md"
          />
        </div>
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
    </header>
  );
}
