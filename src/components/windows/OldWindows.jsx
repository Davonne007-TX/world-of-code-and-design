import ToBegin from "./ToBegin";
import Users from "./Users";
import WindowsHeader from "./WIndowsHeader";
import WindowsFooter from "./WindowsFooter";

export default function OldWindows() {
  return (
    <main className="min-h-screen flex font-sans flex-col">
      <WindowsHeader />
      <div className="flex flex-col md:flex-row my-14 gap-8 max-w-6xl">
        <ToBegin />
        <Users />
      </div>
      <WindowsFooter />
    </main>
  );
}
