export default function Contact() {
  return (
    <div className="flex gap-6 ml-14 font-orb text-2xl">
      <button className="relative group">
        <span className="pb-1">Contact</span>
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button className="relative group">
        <span className="pb-1">Login</span>
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </button>
    </div>
  );
}
