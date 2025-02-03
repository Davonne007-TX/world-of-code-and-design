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
      exhibitDescription: `In mi nunc, interdum eu vulputate et, pellentesque ut nibh. In risus elit, cursus ut mattis porttitor, porta vel nibh. `,
      exhibitImage: "/images/galaxies.jpg",
      alt: "Image of a far away Planet in the distance of space, Photo by Javier Miranda on Unsplash",
      id: 2,
    },
  ];

  return (
    <section className="flex flex-col gap-4 md:mt-32 mb-10 ">
      <h3 className="ml-3 text-3xl font-cut">
        February Brings New Exhibits...
      </h3>
      {featuredExhibits.map((exhibit) => (
        <>
          <section
            className="bg-purple-400 max-w-2xl flex flex-col  justify-center items-center rounded-xl p-4 "
            key={exhibit.id}
          >
            {" "}
            <section className=" max-w-lg flex gap-4">
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold font-cut">
                  {exhibit.exhibitTitle}
                </h2>
                <p>{exhibit.exhibitDescription}</p>
                <Button
                  btnTxt={"Learn More → "}
                  className={"font-cut hover:underline"}
                />
              </div>
              <img
                src={exhibit.exhibitImage}
                alt={exhibit.alt}
                className="w-60 rounded-sm"
              />
            </section>
          </section>
        </>
      ))}
    </section>
  );
}
