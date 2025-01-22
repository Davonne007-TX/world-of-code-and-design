import Image from "../Image";

export default function LetsRideTopHeader() {
  const cartImage = "/images/cartIcon.png ";
  const waiting = ["What are you waiting for, find your location today"];
  return (
    <section className="w-full bg-pink-700/60 p-4 text-white text-md">
      <section className="flex gap-4">
        <p>{waiting}</p>
        <Image image={cartImage} className="ml-auto" />
        <p>Login</p>
      </section>
    </section>
  );
}
