import Button from "../Button";

export default function KarateHeader() {
  const karateNav = [
    { karateLink: "About", id: 1 },
    { karateLink: "Programs", id: 2 },
    { karateLink: "National Tournament", id: 3 },
    { karateLink: "Gallery", id: 4 },
  ];

  return (
    <>
      <header className="p-4 font-glo font-bold flex justify-between items-center">
        <h1 className="text-5xl">Iron Fist Karate</h1>

        <nav>
          <ul
            className="flex gap-4 text-lg
            md:text-xl ml-auto "
          >
            {karateNav.map((nav) => (
              <li key={nav.id}>{nav.karateLink}</li>
            ))}
          </ul>
          <section className="flex gap-4 ml-auto mt-2">
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
          </section>
        </nav>
      </header>
    </>
  );
}
