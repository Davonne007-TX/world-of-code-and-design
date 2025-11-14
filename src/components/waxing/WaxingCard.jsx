export default function WaxingCard({
  service,
  description,
  price,
  image,
  alt,
}) {
  return (
    <section
      className=" bg-punch/70 max-w-xs flex flex-col rounded-3xl shadow-lg 
      transition 
      hover:shadow-2xl 
      hover:-translate-y-1 
      duration-30 p-4 items-center gap-4"
    >
      <h2 className="font-semibold text-xl font-glo">{service}</h2>
      <p className="font-thin text-center">{description}</p>
      <p>$From {price}</p>
      <img src={image} className="" alt={alt} />
    </section>
  );
}
