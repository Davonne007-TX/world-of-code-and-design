import Card from "../Card";

export default function PawHero() {
  const roxy = "./images/roxy.jpg";
  return (
    <section>
      <Card
        sectionStyles="text-white rounded mt-20 md:mt-10 max-w-xs md:max-w-2xl"
        title="Fireworks Are Fun - But Not for Every Family Member"
        description={`Calm Paws raises awareness about how fireworks can affect our furry friends. 
        While we enjoy the celebration, it's important to remember the fear and stress it can cause in dogs. 
        `}
        moreDescription={`Together, we can make a difference! Calm Paws
        are happy paws, just like Roxy!`}
        descriptionStyles="font-thin shadow-xl p-2"
        moreDescriptionStyles="font-thin shadow-xl p-2"
        image={roxy}
        className="max-w-2xs md:max-w-2xl rounded-xl mt120 md:mt-20"
        buttonText="Learn How Fireworks Affect Dogs"
        buttonStyles="bg-ourBlue text-xl my-10 text-white font-bold w-60 md:w-96 rounded-full md:p-2 mx-auto md:mx-0 transition-all duration-300 hover:bg-red-400 hover:scale-105 hover:shadow-xl"
      />
    </section>
  );
}
