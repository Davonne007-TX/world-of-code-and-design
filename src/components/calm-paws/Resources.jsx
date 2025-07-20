import { FaPhoneAlt } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";
import HelpfulLinks from "./HelpfulLinks";
import { emergencyContacts } from "./calmPawsAwareness";
import { moreResources } from "./calmPawsAwareness";
import Immediate from "./Immediate";
import Roxy from "./Roxy";

export default function Resources() {
  return (
    <section className="flex flex-col justify-center items-center mt-20">
      <div className="max-w-6xl">
        <div className="flex gap-8 justify-center items-center">
          <h1 className="font-sig text-4xl md:text-4xl lg:text-5xl text-center">
            Helpful Resources
          </h1>
        </div>
        <HelpfulLinks />
        <Immediate />

        <div className="bg-red-100 border-4 border-red-600 mx-auto max-w-xs md:max-w-4xl lg::max-w-5xl p-2 md:p-8 rounded my-20 mt-24">
          <div className="flex gap-8">
            <FaPhoneAlt size={28} className="mt-4 md:mt-0" />
            <h2 className="text-3xl font-serif font-bold text-red-600">
              Emergency Contacts
            </h2>
          </div>

          <ul className="mt-10 text-2xl flex flex-col gap-8">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-10">
                  <li className="text-3xl">{contact.name}</li>
                  <button className="bg-red-500/90 p-1 md:ml-auto rounded cursor-pointer text-md hover:scale-105">
                    {contact.phone}
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <div className="bg-blue-200 border-4 border-blue-500 mx-auto max-w-xs md:max-w-4xl lg::max-w-5xl p-2 md:p-8 rounded">
          <div className="flex gap-8">
            <IoPawSharp size={28} className="mt-4 md:mt-0" />
            <h2 className="text-3xl font-serif font-bold text-blue-600">
              More Resources
            </h2>
          </div>
          <ul className="mt-10 text-2xl flex flex-col gap-8">
            {moreResources.map((contact) => (
              <div key={contact.id} className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-10">
                  <li className="text-3xl">{contact.name}</li>
                  <button className="bg-white p-1 md:ml-auto rounded cursor-pointer text-md hover:scale-105">
                    {contact.phone}
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <Roxy />
      </div>
    </section>
  );
}
