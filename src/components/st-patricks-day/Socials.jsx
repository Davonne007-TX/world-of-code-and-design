import Image from "../Image";

export default function Socials() {
  const socials = [
    {
      socialLinks: "./images/facebookLogo.png",
      alt: "Facebook logo, Logo by Icons8",
      id: 1,
    },
    {
      socialLinks: "./images/instagramLogo.png",
      alt: "Instagram Logo, Logo by Icons8",
      id: 2,
    },
    { socialLinks: "./images/xLogo.png", alt: "X Logo, Logo by Icons8", id: 3 },
  ];
  return (
    <ul className="flex ml-auto gap-2 ">
      {socials.map((links) => (
        <li key={links.id}>
          <Image image={links.socialLinks} alt={links.alt} />
        </li>
      ))}
    </ul>
  );
}
