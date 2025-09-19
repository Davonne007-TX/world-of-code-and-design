import Search from "./Search";

export default function Hero() {
  const aboutSkateCompetition = [
    `2025 brings our Annual National Skater Skate Off. Skaters from across
     the United States come together to compete for glory and the chance to
     win $100,000 worth of skating gear, $80,000, and a chance for National Sponsorship.`,
  ];

  return (
    <section className="font-thin flex flex-col justify-center items-center text-neutral-100 bg-black/50 p-8 rounded lg:mt-40">
      <div className="max-w-4xl">
        <h2 className="text-7xl mt-20 font-pro">Do you have what it takes?</h2>
        <p className="text-3xl mt-4 font-semibold font-sans">
          {aboutSkateCompetition}
        </p>
        <Search />
      </div>
    </section>
  );
}
