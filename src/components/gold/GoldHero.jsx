import Button from "../Button";

const help = "Let Us, Help You";
const excuses = "1-800-NO-EXCUSESs";

export default function GoldHero() {
  return (
    <section className="flex justify-center items-center text-center mt-80 md:mt-60">
      <section className="max-w-3xl bg-green-600  text-white p-2 rounded-xl mb-8">
        <h2 className="font-audio text-4xl">Chase After Your Goal ..!</h2>
        <p className="font-audio text-3xl mt-4">{help}</p>
        <p className="font-bold text-3xl mt-4">{excuses}</p>
        <Button
          btnTxt={"Pledge Today"}
          className={
            "bg-white rounded-full w-full text-green-600 p-2 font-bold mt-4"
          }
        />
      </section>
    </section>
  );
}
