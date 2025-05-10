import Button from "../Button";

export default function ConcertHeader() {
  const ourHeader = [
    { link: "Tour Dates", id: 1 },
    { link: "Special Guest", id: 2 },
    { link: "Merch", id: 3 },
    { link: "Community", id: 4 },
  ];

  return (
    <header className=" text-white px-6 py-8 shadow-md bg-black/10">
      <div className="flex justify-between items-center">
        <h1 className="font-sed text-4xl md:text-4xl text-shadow-md transform hover:scale-105 transition-transform duration-300">
          🎧 Takin it Back Tour
        </h1>
        <ul className="hidden md:flex gap-12 font-cut text-2xl">
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
          className="hidden md:flex bg-white text-black font-sed text-2xl p-2 rounded-full shadow-md hover:bg-gradient-to-r from-gray-100 to-gray-300 hover:scale-110 transition-all duration-300"
        />
      </div>
    </header>
  );
}
