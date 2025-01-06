import Hero from "./Hero";
import Nav from "./Nav";

export default function SpaceExploration() {
  return (
    <main className="bg-[url('images/earth.jpg')] bg-cover bg-no-repeat shadow-xl bg-center min-h-screen">
      <Nav />
      <Hero />
    </main>
  );
}
