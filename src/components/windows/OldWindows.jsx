import ToBegin from "./ToBegin";
import Users from "./Users";
import WindowsHeader from "./WIndowsHeader";
import WindowsFooter from "./WindowsFooter";

export default function OldWindows() {
  return (
    <main className="flex bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 to bg-netural font-sans flex-col justify-center items-center">
      <WindowsHeader />
      <div className="flex flex-col md:flex-row p-8 gap-40 justify-center items-center">
        <ToBegin />
        <Users />
      </div>
      <WindowsFooter />
    </main>
  );
}
