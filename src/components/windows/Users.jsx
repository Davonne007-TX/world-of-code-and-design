import ChooserAUser from "./ChooserAUser";

export default function Users() {
  const users = [
    { userName: "Cat", userImage: "/images/cat.jpg", alt: "", id: 1 },
    { userName: "Code", userImage: "/images/coding.jpg", alt: "", id: 2 },
    { userName: "Duck", userImage: "/images/duck.jpg", alt: "", id: 3 },
    { userName: "Plane", userImage: "/images/plane.jpg", alt: "", id: 4 },
  ];

  return (
    <section>
      <ul className="flex flex-col gap-8">
        {users.map((user) => (
          <li key={user.id}>
            <ChooserAUser userImage={user.userImage} userName={user.userName} />
          </li>
        ))}
      </ul>
    </section>
  );
}
