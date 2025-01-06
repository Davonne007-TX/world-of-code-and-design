export default function Button({ btnTxt, onClick, className }) {
  return (
    <button className={`p-2 rounded ${className}`} onClick={onClick}>
      {btnTxt}
    </button>
  );
}
