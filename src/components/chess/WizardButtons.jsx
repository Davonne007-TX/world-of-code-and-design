import Button from "../Button";

export default function WizardButtons() {
  return (
    <section className="flex gap-4 font-bold">
      <Button
        btnTxt={"Login"}
        className={"bg-white p-2 text-black rounded-full"}
      />
      <Button
        btnTxt={"Sign Up"}
        className={"bg-black p-2 text-white rounded-full"}
      />
    </section>
  );
}
