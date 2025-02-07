import Button from "../Button";
import Icons from "./Icons";

export default function RingHeader() {
  const foreverLinks = [
    { ourLink: "Wedding & Anniversary", id: 1 },
    { ourLink: "Deals and Specials", id: 2 },
    { ourLink: "Diamonds", id: 3 },
    { ourLink: "Gifts", id: 4 },
  ];
  return (
    <header className="flex flex-col justify-center items-center">
      <h1 className=" font-lobster text-black text-4xl mt-10 md:mt-4 md:text-5xl">
        Forever Diamonds
      </h1>
      <Icons />

      <ul className="text-black hidden md:flex font-thin h-full items-center justify-center gap-8 md:text-xl mt-4 ">
        {foreverLinks.map((links) => (
          <li key={links.id} className=" mb-10 cursor-pointer hover:underline">
            {links.ourLink}
          </li>
        ))}
      </ul>
    </header>
  );
}
