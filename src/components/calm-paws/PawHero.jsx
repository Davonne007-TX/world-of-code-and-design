import Card from "../Card";

export default function PawHero() {
  const roxy = "./images/roxy.jpg";
  return (
    <section>
      <Card
        sectionStyles="text-white rounded mt-14 max-w-xs md:max-w-xl mt-10 p-4"
        title="Fireworks Are Fun - But Not for Every Family Member"
        description={`Calm Paws raises awareness about how fireworks can affect our furry friends. 
        While we enjoy the celebration, it's important to remember the fear and stress it can cause in dogs. 
        `}
        moreDescription={`Together, we can make a difference! Calm Paws
        are happy paws, just like Roxy!`}
        descriptionStyles="font-thin shadow-xl "
        image={roxy}
        className="max-w-2xs md:max-w-xl rounded-xl p-2"
        buttonText="Learn How Fireworks Affect Dogs"
        buttonStyles="bg-red-400 font-bold w-60 md:w-96 rounded-full md:p-2 mx-auto md:mx-0 transition-all duration-300 hover:bg-blue-400 hover:scale-105 hover:shadow-xl"
      />
    </section>
  );
}
