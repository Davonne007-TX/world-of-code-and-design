import AIButtons from "./AIButtons";

export default function AiHeader() {
  const aiFeatures = [
    { link: "Features", id: 1 },
    { link: "Latest News", id: 2 },
    { link: "Singularity", id: 3 },
    { link: "Purchasing", id: 4 },
  ];
  return (
    <header className="p-4 flex flex-col gap-2">
      <div className="flex gap-60">
        <h1 className={"text-4xl font-orb"}>R. Force</h1>
        <AIButtons />
      </div>
      <ul className="flex gap-8 text-xl font-thin">
        {aiFeatures.map((features) => (
          <li key={features.id}>{features.link}</li>
        ))}
      </ul>
    </header>
  );
}
