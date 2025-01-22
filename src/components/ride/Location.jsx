import Image from "../Image";

export default function Location() {
  const search = "/images/search.png";
  return (
    <section className="bg-black font-serif p-4 text-white w-full justify-center items-center">
      <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
        <p className="mt-2 text-lg">Find a location near you</p>
        <label className="relative flex justify-center items-center">
          <input
            type="search"
            className="bg-neutral-100 p-2 w-76 text-black outline-none rounded "
          />
          <Image
            image={search}
            className={
              "w-10 ml-10 p-1 lg:p-1 absolute left-54 rounded-full cursor-pointer"
            }
          />
        </label>
      </section>
    </section>
  );
}
