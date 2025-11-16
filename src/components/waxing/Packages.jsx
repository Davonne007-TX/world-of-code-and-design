import { packages } from "./data/packages";

export default function Packages() {
  return (
    <section className="flex flex-col justify-center items-center my-20 py-20">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
        <img
          src="./images/friends.jpg"
          className="max-w-xs md:max-w-lg shadow-md rounded-3xl"
          alt="two friends laughing outside, image by baylee gramling on Unsplash"
        />
        <div className="py-8 max-w-xs md:max-w-md flex flex-col gap-2">
          <h1 className="font-glo text-3xl md:text-4xl ">
            Pick the package that is right for you
          </h1>
          {/* <p className="text-xl">
            We offer packages to keep track of your waxing progress and help you
            save money along the way!
          </p> */}

          <ul className="flex flex-col gap-8 mt-4">
            {packages.map((pkg) => (
              <li className="flex flex-col gap-2" key={pkg.id}>
                <img src={pkg.src} alt={pkg.alt} className="w-10" />
                <div className="flex flex-col gap-2 ">
                  <h2 className="text-xl font-bold font-serif">{pkg.name} </h2>

                  <p className="text-lg">{pkg.description}</p>
                  <a className="hover:text-candy font-semibold cursor-pointer">
                    {" "}
                    Learn More
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
