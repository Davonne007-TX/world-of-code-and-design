export default function OurWax() {
  const aboutOurWax = `Working with beauty industry leaders, our wax is made just for us and our guests. Made with all natural ingredients and no parabens, phthalates, or synthetic fragrances. Our wax is a hard wax and 
  is gentle on the skin, removing all the unwanted hair and is more healthy for your skin. Get silly smooth with our custom wax made just for us and for you.  `;

  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-10">
        <div className="flex flex-col justify-center items-center gap-8">
          <img
            src="./images/wax.jpg"
            alt=""
            className="max-w-xs md:max-w-5xl md:w-[900px] md:h-[250px] object-cover rounded-3xl"
          />

          <div className="max-w-xs md:max-w-xl flex flex-col gap-4 text-center">
            <h2 className="font-glo text-4xl">Our Wax</h2>
            <p className="text-2xl">{aboutOurWax}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
