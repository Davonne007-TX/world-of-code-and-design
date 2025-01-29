export default function AimHighHero() {
  const camp = "Basketball Camp 25'";
  const info = `At Aim High Basketball Camp you will lean the skills not only
  for basketball but for the rest of your life. Teamwork. Discipline. Confidence.
  And the opportunity to connect with people who love basketball as much as you.
  Gain skills, make friends, play ball.`;

  return (
    <section className="mt-96 flex flex-col max-w-2xl gap-4 text-white p-8">
      <h2 className="text-6xl font-glo">{camp}</h2>
      <p className="font-serif text-2xl text-balance">{info}</p>
    </section>
  );
}
