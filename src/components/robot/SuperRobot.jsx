export default function SuperRobot() {
  const navItems = [
    { link: "Mission", id: 0, path: "" },
    { link: "Features", id: 1, path: "" },
    { link: "Ethics", id: 2, path: "" },
    { link: "Support ", id: 3, path: "" },
    { link: "Shop", id: 4, path: "" },
  ];
  return (
    <header className="bg-[url('./images/superRobot.jpg')] bg-cover bg-center min-h-screen text-white">
      <div className="flex gap-4 items-center p-1 bg-gradient-to-b from-purple-300/80 to-purple-600">
        <img
          src="./images/robot.png"
          className="text-4xl w-20 drop-shadow-[0_0_10px_#f755c1"
        />
        <h1 className="text-xl font-press shadow-lg p-2 shadow-pink-200">
          SuperRobo
        </h1>
        <nav>
          <ul className="flex gap-8 p-2 text-gray-200 text-lg font-serif">
            {navItems.map((item) => (
              <li key={item.id}>{item.link}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
