import Image from "../Image";

export default function Location() {
  const search = "/images/searchPink.png";
  return (
    <section className="bg-black font-serif p-4 text-white w-full justify-center items-center">
      <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
        <p className="mt-2 text-lg">Find a location near you</p>
        <label className="relative flex justify-center items-center">
          <input
            type="search"
            className="caret-rose-500 bg-neutral-100 p-2 w-68 md:w-76 text-black outline-none rounded "
          />
          <Image
            image={search}
            className={
              "w-10 ml-10 p-1 lg:p-1 absolute left-60 md:left-68 rounded-full cursor-pointer"
            }
            alt={"Search magnify glass, icon by Icons8"}
          />
        </label>
      </section>
    </section>
  );
}
