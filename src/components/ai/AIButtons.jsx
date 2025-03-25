import Button from "../Button";

export default function AIButtons() {
  return (
    <section className="flex gap-4 text-lg text-center fixed bottom-4 right-4">
      <Button
        btnTxt={"Login"}
        className={"bg-gray-300 w-40 rounded-md p-2 font-orb"}
      />
      <Button
        btnTxt={"Sign Up"}
        className={"bg-gray-300 w-40 rounded-md p-2 font-orb"}
      />
    </section>
  );
}
