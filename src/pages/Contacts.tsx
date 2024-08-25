import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [showForm, setShowForm] = useState(false);

  if (contacts.length === 0 && !showForm) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <button
          onClick={() => setShowForm(true)}
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Create Contact
        </button>
        <div className="bg-gray-100 p-4 rounded flex items-center justify-center">
          <span className="text-3xl mr-2">✖</span>
          <div>
            <p className="font-semibold">No Contact Found</p>
            <p>Please add contact from Create Contact Button</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {showForm ? (
        <ContactForm onSave={() => setShowForm(false)} />
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Create Contact
        </button>
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
