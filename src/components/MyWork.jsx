import { myWork } from "../data/myWork";
import { Link } from "react-router-dom";

export default function MyWork() {
  return (
    <nav className="text-white list-none mt-10 font-serif text-2xl hover:text-purple-600 cursor-pointer">
      {myWork.map((work) => (
        <li key={work.id}>
          {" "}
          <Link to={work.link}>{work.text}</Link>
        </li>
      ))}
    </nav>
  );
}
