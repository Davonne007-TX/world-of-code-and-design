import Image from "../Image";
import AiHeader from "./AiHeader";
import Form from "./Form";

export default function Ai() {
  return (
    <main>
      <section className="flex gap-8">
        <div className="flex flex-col">
          <AiHeader />
          <Form />
        </div>

        <Image
          image={"./images/ai.jpg"}
          className="max-w-2xl ml-auto"
          alt="AI Robot knealing on one leg, image by Cash Macanaya on Unsplash"
        />
      </section>
    </main>
  );
}
