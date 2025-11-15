export default function OurWax() {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-10">
        <div className="flex flex-col gap-8">
          <h2 className="font-glo text-4xl text-center">Our Wax</h2>
          <img
            src="./images/wax.jpg"
            alt=""
            className="max-w-xs md:max-w-5xl md:w-[900px] md:h-[250px] object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
