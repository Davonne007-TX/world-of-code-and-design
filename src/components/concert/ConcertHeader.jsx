import Button from "../Button";

export default function ConcertHeader() {
  const ourHeader = [
    { link: "Tour Dates", id: 1 },
    { link: "Special Guest", id: 2 },
    { link: "Merch", id: 3 },
    { link: "Community", id: 4 },
  ];

  return (
    <header className=" text-white p-6 shadow-md bg-black/10">
      <div className="flex justify-between items-center">
        <h1 className="font-sed text-3xl md:text-4xl text-shadow-md transform hover:scale-105 transition-transform duration-300">
          🎧 Takin it Back Tour
        </h1>
        <ul className="hidden md:flex gap-10 font-sed text-2xl">
          {ourHeader.map((headerLink) => (
            <li
              key={headerLink.id}
              className="cursor-pointer hover:bg-white hover:text-black rounded p-2 transition-all duration-300 transform hover:scale-110"
            >
              {headerLink.link}
            </li>
          ))}
        </ul>
        <Button
          btnTxt="Get Tickets"
          className="bg-white text-black rounded-full p-2 font-sed text-2xl transition-all duration-300 transform hover:scale-110"
        />
      </div>
    </header>
  );
}
