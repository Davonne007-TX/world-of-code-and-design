import Card from "../Card";

export default function PawHero() {
  const roxy = "./images/roxy.jpg";
  return (
    <section>
      <Card
        sectionStyles="text-white mt-14 max-w-xl mt-10"
        title="Fireworks Are Fun, But Not for Every Family Member"
        description={`Calm Paws raises awareness about how fireworks can affect our furry friends. 
        While we enjoy the celebration, it's important to remember the fear and stress it can cause in dogs. 
        `}
        moreDescription={`Together, we can make a difference. Calm Paws
        are happy paws, just like Roxy!`}
        descriptionStyles="font-thin shadow-xl "
        image={roxy}
        className="max-w-xl rounded-xl"
      />
    </section>
  );
}
