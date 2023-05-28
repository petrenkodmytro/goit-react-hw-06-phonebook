import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// аналог localStorage
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// налаштування для redux-persist (localStorage)
const contactsConfig = {
  key: 'contacts',
  storage,
};

// store - містить повний стан програми, методи доступу до стану та відправлення екшенів. У програмі може бути лише один стор. Для створення стора є функція createStore(), яка приймає кілька параметрів та повертає новий об'єкт стора.

// Redux Toolkit надає функцію configureStore(options), яка обертає оригінальний createStore(), єдиним аргументом очікує об'єкт параметрів та налаштовує деякі корисні інструменти розробки як частина процесу створення стора.
export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsConfig, contactsReducer),
    filter: filterReducer,
  },

  // окрема властивість middleware, яка є ф-єю фільтратором для localStorage між відправкою actions and reduser
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// створюємо persistor для нашого store
export const persistor = persistStore(store);
