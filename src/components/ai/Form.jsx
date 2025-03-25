import Button from "../Button";

export default function Form() {
  const updates = " Sign Up To Get The Latest Updates";
  const newsletter = `Want to get the latest updates on your fully functional AI robots? Sign
        up today and we'll send you our weekly newsletter.`;

  return (
    <form className="max-w-2xl p-8 h-auto flex flex-col gap-6 justify-center items-center bg-white rounded-lg shadow-lg mt-20">
      <h2 className="font-bold text-left w-full text-4xl text-gray-900">
        {updates}
      </h2>
      <p className="text-lg text-gray-600 text-left w-full">{newsletter}</p>

      <div className="w-full">
        <label className="block text-gray-700 font-medium text-lg mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="w-full">
        <label className="block text-gray-700 font-medium text-lg mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <Button
        type="submit"
        btnTxt={"Sign Up"}
        className="bg-black hover:bg-gray-300 font-orb text-white text-lg font-semibold w-full py-3 rounded-md"
      />
    </form>
  );
}
