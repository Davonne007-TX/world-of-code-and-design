import Image from "../Image";
import AiHeader from "./AiHeader";
import Form from "./Form";

export default function Ai() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col">
          <AiHeader />
          <Form />
        </div>

        <Image
          image={"./images/ai.jpg"}
          className="w-full max-w-md mx-auto lg:max-w-2xl lg:ml-auto"
          alt="AI Robot kneeling on one leg, image by Cash Macanaya on Unsplash"
        />
      </section>
    </main>
  );
}
