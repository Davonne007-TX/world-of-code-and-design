import Nav from "./Nav";
import Hero from "./Hero";

export default function WannaCode() {
  return (
    <main className=" bg-black min-h-screen">
      <section className="flex flex-col justify-center items-center ml-auto">
        <Nav />
        <Hero />
      </section>
    </main>
  );
}
