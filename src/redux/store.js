import {
  configureStore,
  // combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { contactReducer } from './contacts/counter-reducers';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from './contacts/contactsSlice';

// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistConfig, contactReducer),
// });

// const myMiddleware = store => next => action => {
//   if (
//     action.type === 'persist/REHYDRATE' &&
//     action.payload?.items?.length === 0
//   ) {
//     action.payload.items.push(...store.getState().contacts.items);
//   }

//   next(action);
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   // myMiddleware,
// ];

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
