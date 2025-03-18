import Image from "../Image"

export default function TavernHeader() {
    const tavernLinks = [
        {ourLinks: "Menu", id: 1},
        {ourLinks: "Deals", id: 2},
        {ourLinks: "Drink Specials", id: 3},
        {ourLinks: "Online Ordering", id: 4},
        {ourLinks: "Locations", id: 5}
    ]
    const clover = "./images/clover.png"
  return (
 <header className="flex  items-center gap-4 p-4 w-full">
    <Image image={clover} alt="Four Leaf clover" className="font-4xl" />
    <section className=" flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Shamarock Tavern</h1>
        <nav>
            <ul className="flex gap-8 font-serif text-lg">
                {tavernLinks.map((link) => (
                    <li key={link.id}>{link.ourLinks}</li>
                ))}
            </ul>
        </nav>
    </section>
 </header>
  )
}
