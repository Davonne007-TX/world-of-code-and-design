import Button from "../Button";

export default function Offers() {
  const whatIOffer = [
    { offer: "Building Websites for local businesses", id: 1 },
    { offer: "Responsive Web Design / Modern UI", id: 2 },
    { offer: "Website Redesign", id: 3 },
  ];
  return (
    <section className="flex flex-col font-mono gap-4 text-lg ">
      {whatIOffer.map((offer) => (
        <Button
          key={offer.id}
          btnTxt={offer.offer}
          className="bg-gray-200 w-60 md:w-80 mx-auto rounded"
        />
      ))}

      <Button
        btnTxt="Work With Me"
        className="mx-auto w-60 bg-gradient-to-r text-2xl mt-4 rounded-full from-green-500 to-green-700 text-white hover:scale-105  transition-all duration-300 transform ease-out"
      />
    </section>
  );
}
