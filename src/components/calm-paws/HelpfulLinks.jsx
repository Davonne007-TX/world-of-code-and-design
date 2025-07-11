export default function HelpfulLinks() {
  const resources = [
    {
      text: "Animal Defence League of Texas",
      link: "https://adltexas.org/online-resources/fireworks-safety-for-pets/",
      id: 1,
    },
    {
      text: "Animal Kennel Club",
      link: "https://www.akc.org/expert-advice/training/how-to-keep-your-dog-calm-during-fireworks/",
      id: 2,
    },
    {
      text: "Humane Animal Partners",
      link: "https://www.humaneanimalpartners.org/10-tips-for-keeping-pets-safe-and-calm-during-fireworks/",
      id: 3,
    },
    {
      text: "American Veterniary Medical Association",
      link: "https://www.avma.org/resources/pet-owners/petcare/july-4-safety",
      id: 4,
    },
    {
      text: "petMd by Chewy Helpful Tips",
      link: "https://www.petmd.com/dog/tips-helping-dogs-thats-scared-fireworks",
      id: 5,
    },
    {
      text: "College of Veterinary Medicine",
      link: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/fear-fireworks-and-thunderstorms",
      id: 6,
    },
  ];
  return (
    <section className="flex flex-col justify-center py-20 items-center">
      <div className="max-w-xs md:max-w-sm lg:max-w-6xl flex flex-col gap-8 ">
        <ul className="w-full max-w-7xl px-2 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <li
              key={resource.id}
              className="text-2xl md:text-3xl flex items-center p-4  font-thin cursor-pointer py-10 shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.02] border border-gray-200 hover:text-blue-400"
            >
              {" "}
              <a href={resource.link}>{resource.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
