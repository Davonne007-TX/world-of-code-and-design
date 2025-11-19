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
      <h2 className="text-candy font-cut text-5xl">Silky Smooth</h2>
      <p className="text-white text-xl text-center max-w-xl">
        Premium Waxing Services just for you. Book Your Appointment and get
        Silky Smooth Today.
      </p>

      <ul className="flex gap-4">
        {footerSocialMediaLinks.map((mediaLinks) => (
          <img key={mediaLinks.id} src={mediaLinks.src} alt={mediaLinks.alt} />
        ))}
      </ul>
    </footer>
  );
}
