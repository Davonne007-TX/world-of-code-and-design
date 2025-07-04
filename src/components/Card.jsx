export default function Card({
  sectionStyles,
  title,
  description,
  moreDescription,
  image,
  className,
  alt,
  descriptionStyles,
  moreDescriptionStyles,
  buttonText,
  buttonStyles,
}) {
  return (
    <>
      <section className="flex flex-col justify-center items-center md:flex-row ">
        <div className="flex flex-col">
          <div
            className={`flex flex-col justify-center items-center gap-4 ${sectionStyles}`}
          >
            <h2 className={`text-4xl lg:text-5xl font-bold ${className}`}>
              {title}
            </h2>
            <p className={`text-2xl ${descriptionStyles}`}>{description}</p>
            <p className={`text-2xl ${moreDescriptionStyles}`}>
              {moreDescription}
            </p>
          </div>
          <button className={buttonStyles}>{buttonText}</button>
        </div>
        <img src={image} className={`mt-10 ${className}`} alt={alt} />
      </section>
    </>
  );
}
