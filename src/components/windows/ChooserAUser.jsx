import Image from "../Image";

export default function ChooserAUser({ userImage, alt, userName }) {
  return (
    <section className="flex gap-4">
      <Image
        image={userImage}
        alt={alt}
        className="w-40 rounded-xl border-4 border-transparent cursor-pointer hover:border-yellow-300 transition-all duration-200"
      />
      <button className="cursor-pointer text-xl">{userName}</button>
    </section>
  );
}
