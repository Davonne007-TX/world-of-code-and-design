import Image from "../Image";

export default function WindowsFooter() {
  return (
    <footer className="bg-brightPink p-12 w-full flex justify-between items-center">
      <Image image="/images/power.png" className="w-12" />
      <p className="font-lobster ml-4 text-2xl">Turn off Computer</p>
      <p className="ml-auto mr-4  max-w-lg text-xl font-sans">
        You are able to switch accounts. You can also add more users or change
        any. Head on over to User Settings.
      </p>
    </footer>
  );
}
