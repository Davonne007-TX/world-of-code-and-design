import Button from "../Button";

export default function BookNextFlight() {
  return (
    <form className="grid grid-cols-2 gap-4 cursor-pointer">
      <label className="flex gap-2">
        One Way
        <input type="radio" value="One Way" name="trip-type" />
      </label>

      <label className="flex gap-2">
        Round Trip
        <input type="radio" value="Round Trip" name="trip-type" />
      </label>
      <label>
        <input type="text" placeholder="From*" name="current-location" />
      </label>

      <label>
        <input type="text" placeholder="To*" name="destination" />
      </label>
      <label>
        Departing*
        <input
          type="date"
          placeholder="Departing"
          name="departing"
          className="lg:ml-1"
        />
      </label>

      <label>
        Returning*
        <input
          type="date"
          placeholder="Returning"
          name="returning"
          className="lg:ml-1"
        />
      </label>

      <label>
        <input type="number" placeholder="Bags*" name="bag-quality" />
      </label>

      <label>
        <input type="number" placeholder="Passengers*" name="adult-quality" />
      </label>

      <Button
        btnTxt={"Search For Fight"}
        className={"bg-pink-400/40 rounded-full w-full"}
      />
    </form>
  );
}

//note to self, add controlled form
