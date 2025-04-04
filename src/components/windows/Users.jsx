import Image from "../Image";
import ChooserAUser from "./ChooserAUser";

export default function Users() {
  const users = [
    { userName: "cat", userImage: "/images/cat.jpg", alt: "", id: 1 },
    { userName: "code", userImage: "/images/coding.jpg", alt: "", id: 2 },
    { userName: "duck", userImage: "/images/duck.jpg", alt: "", id: 3 },
    { userName: "plane", userImage: "/images/plane.jpg", alt: "", id: 4 },
  ];

  return (
    <section>
      <ul>
        {users.map((user) => (
          <>
            <ChooserAUser userImage={user.userImage} userName={user.userName} />
          </>
        ))}
      </ul>
    </section>
  );
}
