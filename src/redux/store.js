// import { configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import ContactsReducer from './contacts/contactsSlice';
// import FilterReducer from './filter/filterSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(contactsPersistConfig, ContactsReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedReducer,
//     filter: FilterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import contactReduser from './contacts/contactsSlice';
import filterReduser from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filter: filterReduser,
  },
});
