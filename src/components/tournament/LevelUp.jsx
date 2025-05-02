import Card from "../Card";

export default function LevelUp() {
  return (
    <main className="bg-[url('images/centerBasketball.jpg')] bg-cover min-h-screen">
      <section className="flex flex-col justify-center items-center">
        <div className="mt-28 max-w-3xl">
          <Card
            title="Level Up Tournament 2025"
            className="font-pro text-white"
            description="Take your basketball skills to the next level. With our coaches and
                experiences, you will be dunking all day. Just in time to get ready for when the season starts."
            descriptionStyles="text-white text-center font-cut"
          />
        </div>
      </section>
    </main>
  );
}
