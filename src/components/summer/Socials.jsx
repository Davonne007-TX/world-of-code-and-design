import Button from "../Button";
import Image from "../Image";

export default function Socials() {
  return (
    <section className="flex">
      <Button
        btnTxt="Discover Summer"
        className="bg-yellow-300 p-3 rounded-full font-ram text-xl md:text-2xl w-72 hover:bg-yellow-400 transition"
      />
      <Image image="./images/xLogo2.png" className="w-20" />
      <Image image="./images/blueFacebook.png " className="w-20" />
      <Image image="./images/instagram.png" className="w-20" />
    </section>
  );
}
