import { FaHandHoldingMedical } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Resources() {
  const emergencyContacts = [
    { name: "Emergency Vet", phone: "555-VET-HELP", available: "24/7", id: 1 },
    {
      name: "Animal Poison Control",
      phone: "123-456-789",
      available: "24/7",
      id: 2,
    },
    {
      name: "Your Vet",
      phone: "777-MY-VET",
      available: "Call for hours",
      id: 3,
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center my-20">
      <div className="max-w-6xl">
        <div className="flex gap-8 justify-center items-center">
          <FaHandHoldingMedical size={48} />
          <h1 className="font-sig text-4xl lg:text-5xl">
            Paw Emergency Resources
          </h1>
        </div>

        <div className="bg-red-200 border-2 border-red-600 mx-auto max-w-sm md:max-w-4xl lg::max-w-5xl p-2 md:p-8 mt-10 rounded">
          <div className="flex gap-8">
            <FaPhoneAlt size={28} className="mt-4 md:mt-0" />
            <h2 className="text-3xl font-serif font-bold text-red-600">
              Emergency Contacts
            </h2>
          </div>

          <ul className="mt-10 text-2xl flex flex-col gap-8">
            {emergencyContacts.map((contact) => (
              <div key={contact.id} className="flex flex-col">
                <div className="flex gap-10">
                  <li className="text-3xl">{contact.name}</li>
                  <button className="bg-red-400 p-1  ml-auto rounded text-md">
                    {contact.phone}
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
