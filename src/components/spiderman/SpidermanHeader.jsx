import Image from "../Image";

export default function SpidermanHeader() {
  const fanClubLinks = [
    { spidermanLink: "About", id: 1 },
    { spidermanLink: "Archives", id: 2 },
    { spidermanLink: "Discord", id: 3 },
    { spidermanLink: "Merch", id: 4 },
    { spidermanLink: "Connect", id: 5 },
  ];

  const cart = "./images/redCart.png";
  const login = "./images/redAccount.png";

  return (
    <header className="text-white flex flex-col justify-center items-center">
      <section className="flex justify-between items-center w-full mt-2 p-4">
        <h1 className="font-pro text-3xl md:text-4xl ">
          Spiderman Fan Club TX
        </h1>

        <nav className="hidden md:flex justify-center">
          <ul className="flex ">
            {fanClubLinks.map((link) => (
              <li
                key={link.id}
                className="hover:underline text-xl font-sans mr-8"
              >
                {link.spidermanLink}
              </li>
            ))}
          </ul>

          <section className="hidden md:flex ml-auto text-lg">
            <Image
              image={login}
              className={" w-8"}
              alt={"red account, icon by icons8 "}
            />
            <Image image={cart} alt={"red cart icon, icon by icons8"} />
          </section>
        </nav>
      </section>
    </header>
  );
}
