export default function Featuring() {
  const favoriteArtist = [
    { artist: "Eminem", id: 1 },
    { artist: "Lil Wayne", id: 2 },
    { artist: "50 Cent", id: 3 },
    { artist: "Dr. Dre", id: 4 },
    { artist: "Snoop Dog", id: 5 },
    { artist: "T-Pain", id: 6 },
    { artist: "Ciara", id: 7 },
    { artist: "Nelly", id: 8 },
    { artist: "Ludacris", id: 9 },
    { artist: "Flo-Rida", id: 10 },
    { artist: "Lil Jon", id: 11 },
    { artist: "Chris Brown", id: 12 },
    { artist: "Missy Elliot", id: 13 },
    { artist: "Rihanna", id: 14 },
    { artist: "Gwen Stefani", id: 15 },
  ];

  return (
    <section className="text-center my-20">
      <h2 className="font-sed text-4xl md:text-5xl text-white mb-6 text-shadow-md animate__animated animate__fadeIn">
        Featuring The Greatest Hip Hop and R&B
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:w-3/4 lg:w-3/4 mx-auto">
        {favoriteArtist.map((artist) => (
          <li
            key={artist.id}
            className="bg-black w-full p-6 rounded-3xl text-xl md:text-3xl font-cut text-white hover:bg-gradient-to-b from-blue-950 via-black to-blue-950 transform transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer min-h-[120px] flex items-center justify-center"
          >
            {artist.artist}
          </li>
        ))}
      </ul>
    </section>
  );
}
