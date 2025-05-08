import Button from "../Button";
import Image from "../Image";

export default function Socials() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-4 ">
      <Button
        btnTxt="Discover Summer"
        className="bg-yellow-300 p-3 rounded-full font-ram text-xl md:text-2xl w-full md:w-72 hover:bg-yellow-400 transition"
      />
      <div className="flex justify-center gap-4">
        <Image image="./images/xLogo2.png" className="w-16 md:w-20" />
        <Image image="./images/blueFacebook.png" className="w-16 md:w-20" />
        <Image image="./images/instagram.png" className="w-16 md:w-20" />
      </div>
    </section>
  );
}
