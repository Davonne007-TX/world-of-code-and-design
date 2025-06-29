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
    </section>
  );
}
