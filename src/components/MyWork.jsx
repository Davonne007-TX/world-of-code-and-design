export default function MyWork() {
  const myWork = [{ id: 1, text: "Space Event", link: "/space" }];
  return (
    <nav className="text-white list-none mt-10 font-serif text-2xl hover:text-blue-500 cursor-pointer">
      {myWork.map((work) => (
        <li key={work.id}>{work.text}</li>
      ))}
    </nav>
  );
}
