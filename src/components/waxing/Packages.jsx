export default function Packages() {
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
        <img
          src="./images/friends.jpg"
          className="max-w-xs md:max-w-md shadow-md rounded-3xl"
        />
        <div className="py-8 max-w-xs md:max-w-lg flex flex-col gap-4">
          <h2 className="font-glo text-3xl md:text-4xl ">
            Pick the package that is right for you
          </h2>
          <p className="text-2xl">
            We offer a variety of packages to keep track of your waxing progress
            and help you save money along the way!
          </p>
        </div>
      </div>
    </section>
  );
}
