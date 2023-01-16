import { configureStore } from '@reduxjs/toolkit';
import contactReduser from './contacts/contactsSlice';
import filterReduser from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterReduser,
  },
});
