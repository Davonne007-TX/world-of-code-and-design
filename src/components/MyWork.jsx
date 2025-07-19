import { myWork } from "../data/myWork";
import { Link } from "react-router-dom";

export default function MyWork() {
  return (
    <nav className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none mt-10 font-serif text-2xl text-white bg-black/70 p-4 rounded-3xl cursor-pointer">
      {myWork.map((work) => (
        <li key={work.id}>
          {" "}
          <Link
            to={work.link}
            className="hover:underline transition duration-300"
          >
            {work.text}
          </Link>
        </li>
      ))}
    </nav>
  );
}
