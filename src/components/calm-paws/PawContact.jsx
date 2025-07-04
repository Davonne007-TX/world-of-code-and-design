export default function PawContact() {
  const actionLinks = [
    { action: "Contact", id: 1 },
    { action: "Newsletter", id: 2 },
  ];
  return (
    <ul className="flex gap-4 font-sig absolute text-xl right-0 top-1/2 -translate-y-1/2">
      {actionLinks.map((link) => (
        <li
          key={link.id}
          className="text-xl bg-white rounded-full p-2 text-black cursor-pointer hover:underline"
        >
          {link.action}
        </li>
      ))}
    </ul>
  );
}
