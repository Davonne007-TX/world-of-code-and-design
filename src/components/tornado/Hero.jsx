import Image from "../Image";

export default function Hero() {
  const text = `Maecenas gravida tempor vestibulum. 
  Ut a ultrices ligula. Sed facilisis molestie turpis,
  et dictum felis interdum faucibus. Donec egestas
  sodales metus, ut fringilla magna sodales sed. `;
  return (
    <section className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black px-4">
      <div className="mx-auto max-w-5xl flex flex-col md:mb-30">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col">
            <h1 className="text-white font-bold text-4xl md:text-5xl tracking-wider mb-6">
              Here For You When The Storm{" "}
              <span className="text-red-500">Comes</span>
            </h1>
            <p className="text-gray-300 text-2xl">{text}</p>
          </div>
          <Image
            image="/images/tornado.jpg"
            className="max-w-xl rounded-lg p-2
            "
          />
        </div>
      </div>
    </section>
  );
}
