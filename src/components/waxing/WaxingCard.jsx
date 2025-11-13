export default function WaxingCard({ service, description, image, alt }) {
  return (
    <section className=" bg-candy  max-w-sm p-4 flex flex-col mt-10 items-center gap-4">
      <h2 className="font-bold text-xl">{service}</h2>
      <p>{description}</p>
      <img src={image} className="" alt={alt} />
    </section>
  );
}
