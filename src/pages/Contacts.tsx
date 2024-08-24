import React from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

const Contacts: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Contacts</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default Contacts;
