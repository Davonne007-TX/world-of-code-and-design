export default function Icons() {
  const icon1 = "./images/ringSearch.png";
  const icon2 = "./images/accountRing.png";
  const icon3 = "./images/location.png";

  return (
    <>
      <section className="flex gap-4 md:ml-auto md:-mt-12 p-2">
        <img src={icon1} className="w-8" />
        <img src={icon2} className="w-8" />
        <img src={icon3} className="w-8" />
      </section>
    </>
  );
}

//all icons are by Icons8
