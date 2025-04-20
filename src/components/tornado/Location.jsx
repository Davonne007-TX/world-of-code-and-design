import Button from "../Button";

export default function Location() {
  return (
    <>
      <label className="p-4 bg-white rounded-2xl flex items-center gap-x-6 w-full max-w-4xl mx-auto shadow-md">
        <input
          type="text"
          placeholder="Enter ZIP Code"
          className="flex-grow p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <Button
          btnTxt="Check Weather Alerts"
          className="bg-red-500 w-60 hover:bg-red-600 transition duration-300 p-2 text-white font-bold text-md rounded-full shadow-lg"
        />
      </label>
    </>
  );
}
