import CustomHeader from "./CustomHeader";

export default function BmxTopHeader() {
  return (
    <header className="flex flex-col">
      <CustomHeader />
      <h1 className="font-pro text-5xl mt-2 text-center">One Stop Shop</h1>
    </header>
  );
}
