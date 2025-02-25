import Image from "../Image";

export default function BikeHero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen">
      <section className="relative max-w-3xl flex justify-center">
        <Image
          image={"./images/bmx2.jpg"}
          className="max-w-6xl -mt-20 md:-mt-40 rounded-2xl shadow-md"
          alt={
            "BMX Bike on Ramp near buildings, Photo by erik brolin on Unsplash"
          }
        />
      </section>
    </section>
  );
}
