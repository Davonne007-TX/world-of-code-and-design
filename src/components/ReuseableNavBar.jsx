export default function ReuseableNavBar({ heading, burgerNavLinks }) {
  return (
    <header className="text-white font-serif font-thin w-full p-4">
      <nav className="cursor-pointer relative">
        <div className="flex justify-center items-center">
          <h1 className="absolute left-10 ml-2 mt-2 lg:mt-0 text-2xl">
            {heading}
          </h1>

          <ul className="hidden lg:flex justify-between gap-8 items-center text-lg">
            {burgerNavLinks}
          </ul>

          <button className="text-4xl absolute right-0 cursor-pointer">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
