import ToBegin from "./ToBegin";
import Users from "./Users";
import WindowsHeader from "./WIndowsHeader";
import WindowsFooter from "./WindowsFooter";

export default function OldWindows() {
  return (
    <main className="min-h-screen flex flex-col">
      <WindowsHeader />
      <ToBegin />
      <Users />
      <WindowsFooter />
    </main>
  );
}
