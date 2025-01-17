import ReuseableNavBar from "../ReuseableNavBar";

export default function OurBurgerPlace() {
  const ourBurgerLinks = [
    { burgerLinks: "About", id: 1 },
    { burgerLinks: "Menu", id: 2 },
    { burgerLinks: "Locations", id: 2 },
    { burgerLinks: "Contact", id: 4 },
  ];

  return (
    <main>
      <section className="bg-[url-('/images/burgerAndFries.jpg')] bg-cover min-h-screen">
        <ReuseableNavBar
          header={"Our Burger Place"}
          ourNavLinks={
            <>
              {ourBurgerLinks.map((links) => (
                <li key={links.id}>{links.burgerLinks}</li>
              ))}
            </>
          }
        />
      </section>
    </main>
  );
}
