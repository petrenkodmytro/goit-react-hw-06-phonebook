import { createSlice } from '@reduxjs/toolkit';
import initialContacts from '../components/contacts.json';

const initialState = {
  // ініціалізація із файлу contact.json
  items: initialContacts,
};

// Slice для поля 'contacts' з файлу store.js
const contactsSlice = createSlice({
  //назва поля в нашому стейті
  name: 'contacts',
  //початковий стан
  initialState,
  //редюсери
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    // видаляємо елемент з масиву по id
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// console.log(contactsSlice);

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
