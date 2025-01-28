import Image from "../Image";
import Button from "../Button";

export default function SpiderHero() {
  const spidermanImage = "./images/spiderman.jpg";

  const spideySenses = "Are your spider senses tingling? ";

  const sign = `Thats your sign to join your fellow Spider Man Fans at 
  Spiderman Fan Club TX. Connect with us and discuss your favorite movies,
  comics, and all things Spiderman. All fans and ages are welcome.`;

  return (
    <section className="flex flex-col gap-4 justify-center items-center text-white p-4 mt-12">
      <section className="flex flex-col gap-4 max-w-3xl text-center">
        <h2 className="font-pro text-3xl md:text-4xl">{spideySenses}</h2>
        <p className="font-serif text-2xl">{sign}</p>

        <Button
          btnTxt={"Join Today"}
          className={
            "bg-red-700 p-2 font-bold text-white rounded-full w-80 mx-auto"
          }
        />
      </section>

      <Image image={spidermanImage} className={"max-w-sm mx-auto "} />
    </section>
  );
}
