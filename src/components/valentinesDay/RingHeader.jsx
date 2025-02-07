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
    <header className="flex flex-col justify-center items-center font-lobster">
      <h1 className=" text-black text-4xl mt-4 md:text-5xl">
        Forever Diamonds
      </h1>
      <Icons />

      <ul className="text-black flex h-full items-center justify-center gap-8 md:text-xl mt-4 ">
        {foreverLinks.map((links) => (
          <li key={links.id} className="cursor-pointer hover:underline">
            {links.ourLink}
          </li>
        ))}

        {/* <Button
          btnTxt={"Account"}
          className={
            "bg-purple-200 p-2 rounded-full md:text-xl w-40 text-center"
          }
        />
        <Button btnTxt={"Contact"} /> */}
      </ul>
    </header>
  );
}
