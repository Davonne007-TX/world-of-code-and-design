import Button from "../Button";

export default function BookNextFlight() {
  return (
    <form className="grid grid-cols-2 gap-4 cursor-pointer">
      <label className="flex gap-2 flyLabel">
        One Way
        <input type="radio" value="One Way" name="trip-type" />
      </label>

      <label className="flex gap-2 flyLabel">
        Round Trip
        <input type="radio" value="Round Trip" name="trip-type" />
      </label>
      <label className="flyLabel">
        <input type="text" placeholder="From*" name="current-location" />
      </label>

      <label className="flyLabel">
        <input type="text" placeholder="To*" name="destination" />
      </label>
      <label className="flyLabel">
        Departing*
        <input
          type="date"
          placeholder="Departing"
          name="departing"
          className="lg:ml-1"
        />
      </label>

      <label className="flyLabel">
        Returning*
        <input
          type="date"
          placeholder="Returning"
          name="returning"
          className="lg:ml-1"
        />
      </label>

      <label className="flyLabel">
        <input type="number" placeholder="Bags*" name="bag-quality" />
      </label>

      <label className="flyLabel">
        <input type="number" placeholder="Passengers*" name="adult-quality" />
      </label>

      <Button
        btnTxt={"Search For Flight"}
        className={"bg-pink-400/40 rounded-full w-full"}
      />
    </form>
  );
}

//note to self, add controlled form
