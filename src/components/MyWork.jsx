import { Link } from "react-router-dom";

export default function MyWork() {
  const myWork = [{ id: 1, text: "Lets Go To Space", link: "/space" }];
  return (
    <nav className="text-white list-none mt-10 font-serif text-2xl hover:text-blue-500 cursor-pointer">
      {myWork.map((work) => (
        <li key={work.id}>
          {" "}
          <Link to={work.link}>{work.text}</Link>
        </li>
      ))}
    </nav>
  );
}
