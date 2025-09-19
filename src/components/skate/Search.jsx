import Button from "../Button";

export default function Search() {
  const signUp = ["Sign up today and compete with the best of the best."];
  return (
    <>
      <section className="lg:w-full font-thin mt-10">
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold mt-4">{signUp}</p>

          <div className="flex flex-col md:flex-row items-center gap-2">
            <input
              type="search"
              className="text-xl p-2 font-semibold outline-none w-72 md:w-86 bg-neutral-100 text-black rounded"
              placeholder="Enter E-mail Address"
            />
            <Button
              btnTxt={"Submit"}
              className={
                "bg-red-600 rounded font-bold text-lg p-2 w-full md:w-28"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
