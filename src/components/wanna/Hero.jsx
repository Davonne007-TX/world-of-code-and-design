import Image from "../Image";
import Button from "../Button";

const aboutWannaCoode = [
  ` Are you in a coding rut? Overwhelmed with so much you have to learn?
    Our site can help. Wanna Code, lets you keep track of your
    consistency, build projects, participate working with others,
    showcasing your work, all in one site. Join your fellow developers
    building skills, staying consistent to land a role.`,
];

const codeCan = "/images/codeCan.webp";

export default function Hero() {
  return (
    <section className="max-w-xs md:max-w-6xl lg:max-w-7xl flex flex-col text-white mt-20 lg:mt-40">
      <section className="flex flex-col lg:flex-row">
        <section className="flex flex-col gap-4">
          <h2 className="mr-auto text-3xl md:text-3xl lg:text-5xl font-arc">
            Take Your Coding Skills To The Next{" "}
            <span className="text-purple-700">Level</span>
          </h2>
          <p className="max-w-lg md:max-w-xl lg:max-w-2xl text-lg md:text-xl lg:text-2xl">
            {aboutWannaCoode}
          </p>

          <Button
            btnTxt={"Join us Today"}
            className={"bg-purple-700 rounded-full p-2 font-bold w-80 mt-4"}
          />
        </section>
        <Image
          image={codeCan}
          alt={"Purple Soda Can Wanna Code with a Laptop, Image from chatGPT"}
          className={
            "max-w-sm mb-20 md:max-w-md lg:max-w-lg rounded-xl lg:-mt-20 shadow-xl mt-8 lg:ml-10"
          }
        />
      </section>
    </section>
  );
}
