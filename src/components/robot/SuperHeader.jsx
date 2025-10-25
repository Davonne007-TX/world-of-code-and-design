export default function SuperHeader() {
  const navItems = [
    { link: "Mission", id: 0, path: "" },
    { link: "Features", id: 1, path: "" },
    { link: "Ethics", id: 2, path: "" },
    { link: "Gallery ", id: 3, path: "" },
    { link: "Shop", id: 4, path: "" },
  ];
  return (
    <header>
      <div className="flex items-center justify-between p-2 bg-gradient-to-b from-black to-pink-500/20">
        <div className="flex items-center gap-4">
          <img
            src="./images/robot.png"
            className="text-4xl w-20 drop-shadow-[0_0_10px_#f755c1"
          />
          <h1 className="text-xl font-press shadow-pink-200">SuperRobo</h1>
        </div>
        <nav className="flex gap-8 text-gray-200 text-lg font-serif ml-8">
          <ul className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <li key={item.id}>{item.link}</li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex gap-4 ml-auto text-lg">
          <button className="px-4 py-2 cursor-pointer ">Sign In</button>
          <button className="px-4 py-2 border-1 border-pink-400 cursor-pointer rounded hover:shadow-[0_0_15px_#ec4899] hover:bg-pink-600 transition-all duration-300">
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
