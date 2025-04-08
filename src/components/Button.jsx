export default function Button({ className, type, btnTxt, onClick }) {
  return (
    <button
      type={type}
      className={`${className} cursor-pointer`}
      onClick={onClick}
    >
      {btnTxt}
    </button>
  );
}
