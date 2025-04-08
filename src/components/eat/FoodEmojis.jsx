export default function FoodEmojis() {
  const foodEmojis = [
    { food: "🍕", id: 2 },
    { food: "🥡", id: 3 },
    { food: "🍜", id: 4 },
    { food: "🍔", id: 5 },
  ];
  return (
    <section>
      <ul className="flex gap-8 mt-4">
        {foodEmojis.map((food) => (
          <li key={food.id} className="text-5xl">
            {food.food}
          </li>
        ))}
      </ul>
    </section>
  );
}
