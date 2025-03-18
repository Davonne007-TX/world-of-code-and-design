import Image from "../Image"

export default function Socials() {
    const socials = [
        {socialLinks: "./images/facebookLogo.png", alt: ""},
        {socialLinks: "./images/instagramLogo.png", alt: ""},
        {socialLinks: "./images/xLogo.png", alt: ""},
    ]
  return (
 
    <ul className="flex ml-auto gap-2">
        {socials.map((links) => (
           <li key={links.id}>
            <Image image={links.socialLinks} alt={links.alt}/>
           </li>
        ))}
    </ul>


  )
}
