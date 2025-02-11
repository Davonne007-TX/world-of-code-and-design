import Button from "../Button";

export default function KarateHeader() {
  const karateNav = [
    { karateLink: "About", id: 1 },
    { karateLink: "Programs", id: 2 },
    { karateLink: "National Tournament", id: 3 },
    { karateLink: "Gallery", id: 4 },
    { karateLink: "Locations", id: 5 },
    { karateLink: "Contact", id: 6 },
  ];

  return (
    <>
      <header className="p-4 font-pro font-bold flex justify-between items-center">
        <h1 className="text-4xl md:text-5xl mt-2">Iron Fist Karate</h1>

        <nav>
          <ul
            className="hidden md:flex gap-8 text-lg
            md:text-xl ml-auto mt-4 "
          >
            {karateNav.map((nav) => (
              <li key={nav.id}>{nav.karateLink}</li>
            ))}
          </ul>

          {/* <section className="hidden md:flex gap-4 ml-auto mt-2">
            <Button
              btnTxt={"Login"}
              className={"bg-black text-white p-2 rounded-full"}
            />
            <Button
              btnTxt={"Sign Up"}
              className={"bg-black text-white p-2 rounded-full"}
            />
            <Button
              btnTxt={"Locations"}
              className={"bg-black text-white p-2 rounded-full"}
            />
            <Button
              btnTxt={"Contact"}
              className={"bg-black text-white p-2 rounded-full"}
            />
          </section> */}
        </nav>
      </header>
    </>
  );
}
