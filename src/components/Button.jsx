export default function Button({ className, type, btnTxt }) {
  return (
    <button type={type} className={`${className} cursor-pointer`}>
      {btnTxt}
    </button>
  );
}
