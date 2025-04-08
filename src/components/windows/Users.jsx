import ChooserAUser from "./ChooserAUser";

export default function Users() {
  const users = [
    {
      userName: "Cat",
      userImage: "/images/cat.jpg",
      alt: "Cat laying upside down, Photo by: Pixbay from Pexels",
      id: 1,
    },
    {
      userName: "Code",
      userImage: "/images/coding.jpg",
      alt: "Laptop with code, Photo by Oluwaseun Duncan on Pexels",
      id: 2,
    },
    {
      userName: "Duck",
      userImage: "/images/duck.jpg",
      alt: "Yellow Rubber Duck, Photo by Neosiam 2024 on Pexels",
      id: 3,
    },
    {
      userName: "Plane",
      userImage: "/images/plane.jpg",
      alt: "Plane Getting Ready to Board, Photo by Marina Hinic on Pexels",
      id: 4,
    },
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
