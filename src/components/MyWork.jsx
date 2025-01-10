import { myWork } from "../data/myWork";
import { Link } from "react-router-dom";

export default function MyWork() {
  return (
    <nav className="text-white list-none mt-10 font-serif text-2xl  cursor-pointer">
      {myWork.map((work) => (
        <li key={work.id}>
          {" "}
          <Link to={work.link} className="hover:text-purple-600">
            {work.text}
          </Link>
        </li>
      ))}
    </nav>
  );
}
