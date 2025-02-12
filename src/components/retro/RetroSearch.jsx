import Image from "../Image";

export default function RetroSearch() {
  const cart = "./images/redCart.png";
  const login = "./images/redAccount.png";

  return (
    <>
      <label>
        <input
          type="search"
          placeholder="Search..."
          className="p-2 rounded-xl text-black w-60 md:w-80 bg-neutral-200 border-4 outline-none border-red-700 "
        />
      </label>

      <section className="ml-auto hidden md:flex">
        <Image
          image={login}
          className={" w-12"}
          alt={"red account, icon by icons8 "}
        />
        <Image
          image={cart}
          alt={"red cart icon, icon by icons8"}
          className={"w-12"}
        />
      </section>
    </>
  );
}
