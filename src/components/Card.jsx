export default function Card({ title, description, image, className, alt }) {
  return (
    <>
      <section className="flex flex-col justify-center items-center md:flex-row ">
        <section className="flex flex-col gap-4 p-4">
          <h2 className="text-4xl lg:text-5xl font-bold font-orb">{title}</h2>
          <p className="text-2xl text-balance">{description}</p>
        </section>
        <img src={image} className={className} alt={alt} />
      </section>
    </>
  );
}
