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
    <header className="p-8 flex flex-col gap-2">
      <div className="flex justify-between items-center ">
        <h1 className={"text-5xl font-orb"}>R. Force</h1>
      </div>
      <ul className="hidden md:flex gap-8 text-2xl font-thin">
        {aiFeatures.map((features) => (
          <li key={features.id}>{features.link}</li>
        ))}
      </ul>

      <AIButtons />
    </header>
  );
}
