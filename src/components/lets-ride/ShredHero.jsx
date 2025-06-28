export default function ShredHero() {
  return (
    <div className="mt-96 text-white flex flex-col justify-center items-center gap-4 ml-10">
      {" "}
      <h2 className="text-4xl md:text-7xl font-orb bg-blue-200/10 shadow-sm max-w-3xl p-2">
        Go Big or Go Home
      </h2>
      <div className="flex flex-col backdrop-blur-md gap-4 p-6 text-3xl md:text-3xl font-tit ml-4 bg-black/40 max-w-lg">
        <p>
          A community that take BMX riding to another level. Built on community,
          trust, and commitment.
        </p>
        <p>Ride. Compete. Make Memories.</p>
        <button className="bg-black text-white p-2 font-orb">Join Today</button>
      </div>
    </div>
  );
}
