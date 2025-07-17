import ImmediateCard from "./ImmediateCard";

export default function Immediate() {
  const quickActions = [
    {
      icon: "🎶",
      title: "Smooth Music",
      description: "Play calming smooth music",
    },
    {
      icon: "🎾",
      title: "Distraction",
      description: "Chew toys, toys they love",
    },
    {
      icon: "🏠",
      title: "Stay indoors",
      description: "Make sure dogs stay inside",
    },
    {
      icon: "💤",
      title: "Tire Them Out",
      description: "Exercise before fireworks start",
    },
  ];

  return (
    <section className="max-w-xl p-4 rounded-md mt-10 mx-auto bg-blue-200">
      <ImmediateCard
        immediateTitle="Quick Actions"
        description="Take these steps now to help"
        color="text-slate-800"
        descriptionColor="text-blue-600"
      />

      <ul className="p-2 flex flex-col gap-4">
        {quickActions.map((action, index) => (
          <li key={index} className="bg-white p-4 rounded">
            <div className="flex gap-2">
              <span className="text-2xl">{action.icon}</span>
              <h2 className="font-bold text-xl">{action.title}</h2>
            </div>
            <p className="text-lg ml-8">{action.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
