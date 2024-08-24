import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contactSlice";
import { Contact } from "../types";

export const useInitializeStore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      const contacts: Contact[] = JSON.parse(storedContacts);
      contacts.forEach((contact) => {
        dispatch(addContact(contact));
      });
    }
  }, [dispatch]);
};
