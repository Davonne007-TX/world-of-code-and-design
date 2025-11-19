export default function SmoothFooter() {
  const footerSocialMediaLinks = [
    { src: "./images/insta.png", alt: "Instagram icon, by icons8", id: 0 },
    {
      src: "./images/twitter.png",
      alt: "Twitter bird logo, icon by icons 8",
      id: 1,
    },

    {
      src: "./images/fb.png",
      alt: "Facebook logo, icon by icons 8",
      id: 2,
    },
  ];
  return (
    <footer className="bg-black flex flex-col justify-center items-center gap-4 p-8">
      <h2 className="text-candy font-cut text-5xl font-bold">Silky Smooth</h2>
      <p className="text-white text-2xl text-center max-w-xl">
        Premium Waxing Services from head to toe. Book Your Appointment and get
        Silky Smooth Today with our waxing experts.
      </p>

      <number className="text-white text-xl">123-456-7890</number>

      <ul className="flex gap-4 cursor-pointer">
        {footerSocialMediaLinks.map((mediaLinks) => (
          <img key={mediaLinks.id} src={mediaLinks.src} alt={mediaLinks.alt} />
        ))}
      </ul>

      <ul className="text-white flex gap-4 text-lg font-thin">
        <li className=" hover:text-candy">About | </li>
        <li className=" hover:text-candy">Services | </li>
        <li className=" hover:text-candy">Packages | </li>
        <li className=" hover:text-candy">FAQS | </li>
        <li className=" hover:text-candy">Contact </li>
      </ul>
    </footer>
  );
}
