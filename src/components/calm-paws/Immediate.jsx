import ImmediateCard from "./ImmediateCard";

export default function Immediate() {
  const quickActions = [
    {
      icon: "",
      title: "Smooth Music",
      description: "Close windows, use fans or AC",
    },
    {
      icon: "",
      title: "Distraction",
      description: "Offer favorite treats or toys",
    },
    {
      icon: "",
      title: "Stay indoors",
      description: "Make sure dogs stay inside",
    },
    {
      icon: "",
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
    </section>
  );
}
