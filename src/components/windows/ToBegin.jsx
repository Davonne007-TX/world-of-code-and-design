import Image from "../Image";

export default function ToBegin() {
  const ventanas = "/images/windows.jpg";
  return (
    <section className="flex justify-center items-center font-serif text-4xl flex-1">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <Image image={ventanas} className="w-50 rounded-xl" />
            <h1 className="font-lobster mt-28 text-vibriantPink">
              Ventanas XP
            </h1>
          </div>
          <p className="text-2xl font-sans">
            To begin, click on your username.
          </p>
        </div>
      </div>
    </section>
  );
}
