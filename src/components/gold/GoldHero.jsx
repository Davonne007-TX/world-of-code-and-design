import Button from "../Button";

export default function GoldHero() {
  return (
    <section className="flex justify-center items-center text-center mt-60">
      <section className="max-w-3xl bg-green-600  text-white p-2 rounded-xl">
        <h2 className="font-audio text-4xl">Chase After Your Goal ..!</h2>
        <p className="font-audio text-3xl mt-4">Let Us, Help You</p>
        <p className="font-bold text-3xl mt-4">1-800-NO-EXCUSES</p>
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
