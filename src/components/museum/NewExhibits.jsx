import Button from "../Button";

export default function NewExhibits() {
  const featuredExhibits = [
    {
      exhibitTitle: "Colonizing Other Planets",
      exhibitDescription: `It is crucial for Humanity's survival, that we colonize other planets. Our top researches come together to present our findings on how we would make a new planet our home.`,
      exhibitImage: "/images/red.jpg",
      alt: "Image of Red Planet surrounded by other planets, Photo by Javier Miranda on Unsplash",
      id: 1,
    },
    {
      exhibitTitle: "Traveling to near by Galaxies",
      exhibitDescription: `We are closer than ever to be able to travel to near by galaxies. Our teams brings you the Science and the plan set in motion to travel to the stars.`,
      exhibitImage: "/images/galaxies.jpg",
      alt: "Image of a far away Planet in the distance of space, Photo by Javier Miranda on Unsplash",
      id: 2,
    },
  ];

  return (
    <section className="flex flex-col gap-4 md:mt-32 mb-10 ">
      <h3 className="ml-3 text-2xl md:text-3xl font-cut">
        February Brings New Exhibits...
      </h3>
      {featuredExhibits.map((exhibit) => (
        <>
          <section
            className="bg-purple-400 ml-4 max-w-xs md:max-w-3xl lg:max-w-4xl flex flex-col justify-center items-center rounded-xl p-4 "
            key={exhibit.id}
          >
            {" "}
            <section className=" max-w-lg flex flex-col md:flex-col lg:flex-row justify-center items-center gap-4">
              <div className="flex flex-col">
                <h2 className="text-2xl font-cut">{exhibit.exhibitTitle}</h2>
                <p className="text-lg">{exhibit.exhibitDescription}</p>
                <Button
                  btnTxt={"Learn More → "}
                  className={"font-cut hover:underline text-lg"}
                />
              </div>
              <img
                src={exhibit.exhibitImage}
                alt={exhibit.alt}
                className="w-80 lg:w-60 rounded-xl"
              />
            </section>
          </section>
        </>
      ))}
    </section>
  );
}
