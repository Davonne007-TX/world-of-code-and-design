import ToBegin from "./ToBegin";
import Users from "./Users";
import WindowsHeader from "./WIndowsHeader";
import WindowsFooter from "./WindowsFooter";

export default function OldWindows() {
  return (
    <main className="flex font-sans flex-col justify-center items-center">
      <WindowsHeader />
      <div className="flex flex-col md:flex-row gap-8 w-full  bg-pink-200 p-9 justify-center items-center">
        <ToBegin />`
        <Users />
      </div>
      <WindowsFooter />
    </main>
  );
}
