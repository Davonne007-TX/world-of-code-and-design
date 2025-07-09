import { FaDog } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";

export default function GetInvolved() {
  const share = `Share awareness with family and friends about fireworks and the
          affects it has on our pets`;

  const help = `And how we can help them if they get distressed, during the holiday`;
  return (
    <section className="flex flex-col gap-2 justify-center bg-blue-200 items-center min-h-screen">
      <div className="max-w-5xl flex flex-col gap-10 justify-center items-center">
        <h1 className="text-7xl font-sig">We need your help!</h1>

        <div className="flex gap-2">
          <FaDog size={48} />

          <p className="text-4xl text-center font-thin font-sans">{share}</p>
        </div>
        <div className="flex gap-2">
          <GiFireworkRocket size={48} />
          <p className="text-4xl text-center font-thin font-sans">{help}</p>
        </div>
      </div>
    </section>
  );
}
