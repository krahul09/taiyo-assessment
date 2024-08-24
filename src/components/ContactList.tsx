import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { deleteContact } from "../store/contactSlice";
import ContactDetails from "./ContactDetails";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact List</h2>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li
            key={contact.id}
            className="bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {contact.firstName} {contact.lastName}
                </h3>
                <p
                  className={`mt-1 max-w-2xl text-sm ${
                    contact.status === "active"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {contact.status}
                </p>
              </div>
              <div>
                <button
                  onClick={() => setSelectedContact(contact.id)}
                  className="mr-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {selectedContact && (
        <ContactDetails
          contactId={selectedContact}
          onClose={() => setSelectedContact(null)}
        />
      )}
    </div>
  );
};

export default ContactList;
