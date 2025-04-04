import SignIn from "./SignIn";
import WindowsHeader from "./WIndowsHeader";
import WindowsFooter from "./WindowsFooter";

export default function OldWindows() {
  return (
    <main className="min-h-screen flex flex-col">
      <WindowsHeader />
      <SignIn />
      <WindowsFooter />
    </main>
  );
}
