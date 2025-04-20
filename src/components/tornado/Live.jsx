import Button from "../Button";

export default function Live() {
  return (
    <div className="w-full bg-red-500 flex justify-center items-center font-bold text-center gap-2 p-1">
      <p>Check out our broadcast</p>
      <Button
        btnTxt="Live"
        className="bg-red-700 hover:scale-110 text-white p-2 rounded"
      />
    </div>
  );
}
