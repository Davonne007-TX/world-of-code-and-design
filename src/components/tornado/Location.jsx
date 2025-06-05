import Button from "../Button";

export default function Location() {
  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-0">
      <label className="p-2 bg-white rounded-2xl flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6 w-full shadow-md">
        <input
          type="text"
          placeholder="Enter ZIP Code"
          className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-300"
        />
        <Button
          btnTxt="Check Weather Alerts"
          className="w-60 bg-red-500 hover:bg-red-600 transition duration-300 p-2 text-white font-bold text-md rounded-full shadow-lg"
        />
      </label>
    </div>
  );
}
