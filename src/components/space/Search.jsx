import Button from "./Button";

export default function Search() {
  return (
    <section>
      <p className="font-thin mt-2 lg:mt-4 text-md lg:text-2xl">
        Combing our forces to bring together a group of individuals who care
        about humanity's survival of the apocalypse. Bring your family and
        friends and lets surive the end together.
      </p>
      <label>
        <input
          type="search"
          //   value={inputtedSearch}  //need state to practice
          placeholder="Search Locations"
          className="bg-white text-slate-800 max-w-7xl rounded p-3 mt-4 text-sm lg:text-lg  shadow-md focus:outline-none focus:ring focus:ring-orange-500"
        />
        <Button
          btnTxt={"Explore"}
          className={
            "bg-white cursor-pointer text-slate-800 p-4 mt-4 md:mt-2 text-sm ml-2"
          }
        />
      </label>
    </section>
  );
}
