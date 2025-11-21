import { footerSocialMediaLinks, quickLinks } from "./data/footer";

export default function SmoothFooter() {
  return (
    <footer className="bg-black flex flex-col justify-center items-center gap-8 p-8">
      <h2 className="text-candy font-cut text-5xl p-2 font-bold shadow-punch shadow-xl">
        Silky Smooth
      </h2>
      <p className="text-white text-2xl text-center max-w-xl">
        Premium Waxing Services from head to toe. Book your appointment and get
        silky smooth today with our waxing experts.
      </p>

      <number className="text-white text-xl">123-456-7890</number>

      <ul className="flex gap-4 cursor-pointer">
        {footerSocialMediaLinks.map((mediaLinks) => (
          <img key={mediaLinks.id} src={mediaLinks.src} alt={mediaLinks.alt} />
        ))}
      </ul>

      <ul className="text-white flex items-center gap-4 text-lg font-light">
        {quickLinks.map((link) => (
          <li
            key={link.id}
            className="cursor-pointer  hover:font-bold transition-colors after:content-['|'] after:ml-4 last:after:content-none"
          >
            {link.name}
          </li>
        ))}
      </ul>
    </footer>
  );
}
