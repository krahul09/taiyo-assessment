import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { updateContact } from "../store/contactSlice";

interface ContactDetailsProps {
  contactId: string;
  onClose: () => void;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  contactId,
  onClose,
}) => {
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((c) => c.id === contactId)
  );
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(contact?.firstName || "");
  const [lastName, setLastName] = useState(contact?.lastName || "");
  const [status, setStatus] = useState<"active" | "inactive">(
    contact?.status || "active"
  );
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contact && firstName && lastName) {
      dispatch(updateContact({ ...contact, firstName, lastName, status }));
      setIsEditing(false);
    }
  };

  if (!contact) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Contact Details
          </h3>
          <div className="mt-2 px-7 py-3">
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="active"
                        checked={status === "active"}
                        onChange={() => setStatus("active")}
                        className="form-radio h-4 w-4 text-indigo-600"
                      />
                      <span className="ml-2">Active</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        value="inactive"
                        checked={status === "inactive"}
                        onChange={() => setStatus("inactive")}
                        className="form-radio h-4 w-4 text-indigo-600"
                      />
                      <span className="ml-2">Inactive</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </form>
            ) : (
              <div className="text-left">
                <p>
                  <strong>First Name:</strong> {contact.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {contact.lastName}
                </p>
                <p>
                  <strong>Status:</strong> {contact.status}
                </p>
              </div>
            )}
          </div>
          <div className="items-center px-4 py-3">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-indigo-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Edit
              </button>
            )}
            <button
              onClick={onClose}
              className="mt-3 px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
