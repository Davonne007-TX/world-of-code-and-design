import SummerHeader from "./SummerHeader";
import Socials from "./Socials";

export default function SummerTime() {
  return (
    <section className="relative bg-[url('/images/corona.jpg')] bg-cover bg-center min-h-screen">
      {/* Background overlay */}

      {/* Foreground content */}
      <div className="relative z-10 min-h-screen">
        <SummerHeader />

        <div className="text-white p-8 max-w-4xl flex flex-col justify-center items-center  gap-6 text-left ml-4 mt-40">
          {/* Outer gradient border */}
          <div className="shadow-md">
            {/* Inner content box */}
            <div className=" p-8 rounded-3xl flex flex-col gap-6 ">
              <h1 className="text-4xl md:text-5xl font-ram">
                It's Summer Somewhere
              </h1>
              <p className="text-2xl md:text-3xl font-serif max-w-2xl">
                Grab a beer. Be with friends. Sit by the beach and enjoy your
                day. What's going on this Summer?
              </p>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
