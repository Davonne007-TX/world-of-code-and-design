export default function Trusted() {
  const companies = [
    { name: "Future is Now", id: 0 },
    { name: "Mega Earth", id: 1 },
    { name: "Roodle", id: 2 },
    { name: "Gadget Works", id: 3 },
  ];
  return (
    <section className="mt-40 flex gap-10 bg-black/20 p-2 flex-col justify-center items-center ml-auto">
      <p className="font-orb text-3xl">Trusted by the Top Companies</p>
      <ul className="flex gap-40 font-semibold">
        {companies.map((company) => (
          <li key={company.id} className="text-white">
            {company.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
