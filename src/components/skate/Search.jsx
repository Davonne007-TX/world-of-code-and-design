import Button from "../Button";

export default function Search() {
  const signUp = ["Sign up today and compete with the best of the best."];
  return (
    <>
      <section className="lg:w-full font-thin">
        <p className="text-2xl mt-4">{signUp}</p>
        <label className="w-full p-2 lg:p-4 bg-neutral-100 rounded-4xl">
          <input
            type="search"
            className="text-xl md:text-2xl p-2 lg:p-4 mt-4 outline-none text-black"
            placeholder="Enter E-mail Address"
          />

          <Button
            btnTxt={"Submit"}
            className={"bg-black p-1 lg:p-2 rounded-full"}
          />
        </label>
      </section>
    </>
  );
}
