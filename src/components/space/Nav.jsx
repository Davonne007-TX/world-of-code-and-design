import Button from "./Button";

export default function Nav() {
  const navList = [
    { navLink: "Plan", id: 1 },
    { navLink: "Action", id: 2 },
    { navLink: "Maps", id: 3 },
    { navLink: "Tunnels", id: 4 },
  ];

  return (
    <>
      <nav className="flex gap-8 justify-center items-center font-orb text-white">
        <ul className="text-xl flex gap-10 mt-4 font-bold  bg-slate-800 p-4 rounded-full opacity-75">
          <h1 className=" text-3xl">Save Humanity</h1>
          {navList.map((list) => (
            <li key={list.id} className="mt-1 hidden lg:flex">
              {list.navLink}
            </li>
          ))}
          <Button
            btnTxt={"Sign Up"}
            className={"text-xl bg-slate-700 rounded-xl -mt-2"}
          />
          <Button
            btnTxt={"Log In"}
            className={"text-xl bg-slate-700 rounded-xl  -mt-2"}
          />
        </ul>
      </nav>
    </>
  );
}
