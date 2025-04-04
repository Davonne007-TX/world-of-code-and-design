import Image from "../Image";

export default function ChooserAUser({ userImage, alt, userName }) {
  return (
    <section className="flex gap-8">
      <Image
        image={userImage}
        alt={alt}
        className="w-40 rounded-xl border-4 border-transparent hover:border-yellow-300 transition-all duration-200"
      />
      <button className="mt-10 cursor-pointer text-2xl">{userName}</button>
    </section>
  );
}
