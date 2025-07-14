import { resources } from "./calmPawsAwareness";

export default function HelpfulLinks() {
  return (
    <section className="flex flex-col justify-center py-20 items-center">
      <div className="max-w-xs md:max-w-sm lg:max-w-6xl flex flex-col gap-8">
        <ul className="w-full max-w-7xl px-2 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {resources.map((resource) => (
            <li
              key={resource.id}
              className="slide-bg text-2xl md:text-3xl flex items-center  p-4 font-thin cursor-pointer py-10 shadow-md border border-gray-200 
                transition-all-duration-300
                hover:shadow-xl
                hover:-translate-y-1
                hover:bg-blue-400
              "
            >
              {" "}
              <a href={resource.link}>{resource.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
