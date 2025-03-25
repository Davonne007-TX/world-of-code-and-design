import AIButtons from "./AIButtons";

export default function AiHeader() {
  const aiFeatures = [
    { link: "About Us", id: 1 },
    { link: "Features", id: 2 },
    { link: "Latest News", id: 3 },
    { link: "Singularity", id: 4 },
    { link: "Purchasing", id: 5 },
  ];
  return (
    <header className="p-4 flex flex-col  gap-2">
      <div className="flex justify-between items-center ">
        <h1 className={"text-4xl font-orb"}>R. Force</h1>
      </div>
      <ul className="flex gap-8 text-2xl font-thin">
        {aiFeatures.map((features) => (
          <li key={features.id}>{features.link}</li>
        ))}
      </ul>

      <AIButtons />
    </header>
  );
}
