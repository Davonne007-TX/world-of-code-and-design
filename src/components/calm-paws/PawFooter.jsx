import Image from "../Image";

export default function PawFooter() {
  return (
    <footer className="w-fuil text-2xl font-sig text-white p-4 bg-black/80 flex justify-between">
      <Image image="./images/pawsIcon.png" className="w-12" />
      <p>© 2025 Calm Paws Project. All rights reserved. </p>
    </footer>
  );
}
