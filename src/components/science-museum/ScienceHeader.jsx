import Image from "../Image";

export default function ScienceHeader() {
  const scienceNav = [
    { scienceLink: "About Us ", id: 1 },
    { scienceLink: "Exhibits", id: 2 },
    { scienceLink: "Volunteer", id: 4 },
    { scienceLink: "Tickets", id: 5 },
    { scienceLink: "Events", id: 6 },
    { scienceLink: "Gallery", id: 7 },
  ];
  return (
    <header className="bg-green-700 p-2 w-full text-white flex justify-between items-center gap-8">
      <h1 className="font-glo text-3xl">Mesozoic Marvels</h1>
      <nav>
        <ul className="hidden md:flex gap-10 font-serif text-lg">
          {scienceNav.map((nav) => (
            <li key={nav.id} className="mt-2 cursor-pointer">
              {nav.scienceLink}{" "}
            </li>
          ))}
        </ul>
      </nav>
      <section className="hidden lg:flex justify-between gap-2 ml-auto mt-2">
        <div className="flex flex-col gap-2">
          <address className="mt-2">007 Journey Way, Fort Worth Texas</address>
          <p>817-123-456</p>
        </div>
        <Image
          image={"./images/bone.png"}
          className={"ml-auto w-12"}
          alt={"Dinosaur Skull Icon, Image by Smashicons"}
        />
      </section>
    </header>
  );
}
