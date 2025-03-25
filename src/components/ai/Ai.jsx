import Image from "../Image";
import AiHeader from "./AiHeader";
import AiHero from "./AIHero";

export default function Ai() {
  return (
    <main>
      <div className="flex">
        <AiHeader />
        <Image
          image={"./images/ai.jpg"}
          className="max-w-2xl ml-auto"
          alt="AI Robot knealing on one leg, image by Cash Macanaya on Unsplash"
        />
      </div>
      <AiHero />
    </main>
  );
}
