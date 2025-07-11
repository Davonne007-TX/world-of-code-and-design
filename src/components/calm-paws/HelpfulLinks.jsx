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
      resource:
        "https://www.humaneanimalpartners.org/10-tips-for-keeping-pets-safe-and-calm-during-fireworks/",
      id: 3,
    },
    {
      text: "American Veterniary Medical Association",
      resource:
        "https://www.avma.org/resources/pet-owners/petcare/july-4-safety",
      id: 4,
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="max-w-6xl">
        {resources.map((resource) => (
          <li key={resource.id}>
            {" "}
            <a href={resource.link}>{resource.text}</a>
          </li>
        ))}
      </div>
    </section>
  );
}
