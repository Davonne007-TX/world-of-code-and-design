export default function Button({ className, btnTxt }) {
  return <button className={`${className} cursor-pointer`}>{btnTxt}</button>;
}
