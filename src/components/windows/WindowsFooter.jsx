import Image from "../Image";

export default function WindowsFooter() {
  return (
    <footer className="bg-brightPink p-6 mt-4 flex justify-between items-center">
      <Image image="/images/power.png" className="w-12" />
      <p className="font-lobster text-2xl">Turn off Computer</p>
      <p className="ml-auto max-w-lg text-xl font-sans">
        You are able to switch accounts. You can also add more users or change
        any. Head on over to User Settings.
      </p>
    </footer>
  );
}
