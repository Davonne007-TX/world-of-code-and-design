import HeaderWorkshop from "./HeaderWorkshop";

export default function Workshop() {
  return (
    <main className="flex flex-col justify-center items-center">
      <HeaderWorkshop />
      <img
        src="./images/santa.webp"
        className="max-w-xl md:max-w-4xl rounded-3xl"
      />
    </main>
  );
}
