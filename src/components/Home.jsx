import MyWork from "./MyWork";

export default function Home() {
  return (
    <main className="bg-black h-screen text-white">
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold font-glo mt-10">2025</h1>
        <MyWork />
      </section>
    </main>
  );
}
