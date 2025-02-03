export default function Card({
  title,
  exhibitDescription,
  image,
  className,
  alt,
}) {
  return (
    <>
      <section className="flex flex-col md:flex-row ">
        <section className="flex flex-col">
          <h2>{title}</h2>
          <p>{exhibitDescription}</p>
        </section>
        <img src={image} className={className} alt={alt} />
      </section>
    </>
  );
}
