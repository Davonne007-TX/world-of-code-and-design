export default function SuperRobot() {
  const navItems = [
    { link: "Mission", id: 0, path: "" },
    { link: "Features", id: 1, path: "" },
    { link: "Ethics", id: 2, path: "" },
    { link: "Support ", id: 3, path: "" },
    { link: "Shop", id: 4, path: "" },
  ];
  return (
    <header className="bg-[url('./images/superRobot.jpg')] bg-cover bg-center min-h-screen">
      <h1 className="text-4xl">Super Robot</h1>

      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>{item.link}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
