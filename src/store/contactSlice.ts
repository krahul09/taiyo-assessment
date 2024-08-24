import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../types";

interface ContactState {
  contacts: Contact[];
}

const loadContactsFromStorage = (): Contact[] => {
  const storedContacts = localStorage.getItem("contacts");
  return storedContacts ? JSON.parse(storedContacts) : [];
};

const saveContactsToStorage = (contacts: Contact[]) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};

const initialState: ContactState = {
  contacts: loadContactsFromStorage(),
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      saveContactsToStorage(state.contacts);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
        saveContactsToStorage(state.contacts);
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      saveContactsToStorage(state.contacts);
    },
  },
});

export const { addContact, updateContact, deleteContact } =
  contactSlice.actions;
export default contactSlice.reducer;
