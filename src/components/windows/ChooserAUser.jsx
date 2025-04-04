import Image from "../Image";

export default function ChooserAUser({ userImage, alt, userName }) {
  return (
    <section className="flex gap-8">
      <Image image={userImage} alt={alt} className="w-20 rounded-xl" />
      <p>{userName}</p>
    </section>
  );
}
