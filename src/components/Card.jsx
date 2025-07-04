export default function Card({
  sectionStyles,
  title,
  description,
  image,
  className,
  moreDescription,
  alt,
  descriptionStyles,
}) {
  return (
    <>
      <section className="flex flex-col justify-center items-center md:flex-row ">
        <section
          className={`flex flex-col justify-center items-center gap-4 p-4 ${sectionStyles}`}
        >
          <h2 className={`text-4xl lg:text-6xl font-bold ${className}`}>
            {title}
          </h2>
          <p className={`text-2xl text-balance ${descriptionStyles}`}>
            {description}
          </p>
          <p className="text-2xl text-balance font-thin">{moreDescription}</p>
        </section>
        <img src={image} className={` mt-10 ${className}`} alt={alt} />
      </section>
    </>
  );
}
