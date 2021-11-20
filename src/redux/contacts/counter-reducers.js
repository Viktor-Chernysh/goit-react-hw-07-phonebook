import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

// import * as counterTypes from './counter-types';
import * as actions from './contact-actions';

const initContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
// const lSContacts = JSON.parse(
//   JSON.parse(window.localStorage.getItem('persist:contacts')).items,
// );

const addContact = (contacts, addedContact) => {
  // contacts = lSContacts.length === 0 && initContacts;
  const addedName = contacts
    .map(el => el.name.toLowerCase())
    .includes(addedContact.payload.name.toLowerCase());
  const addedNumber = contacts
    .map(el => el.number)
    .includes(addedContact.payload.number);
  if (addedName && addedNumber) {
    alert(`${addedContact.payload.name} is already in contacts!`);
    return contacts;
  }
  return [...contacts, addedContact.payload];
};

const itemsReducer = createReducer(initContacts, {
  [actions.addNewContact]: (state, action) => addContact(state, action),
  [actions.deleteContact]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});
// const itemsReducer = (state = initContacts, { type, payload }) => {
//   switch (type) {
//     case counterTypes.GET_CONTACT:
//       const addedName = state
//         .map(el => el.name.toLowerCase())
//         .includes(payload.name.toLowerCase());
//       const addedNumber = state.map(el => el.number).includes(payload.number);
//       if (addedName && addedNumber) {
//         alert(`${payload.name} is already in contacts!`);
//         return state;
//       }
//       return [...state, payload];

//     case counterTypes.DELETE_CONTACT:
//       return state.filter(el => el.id !== payload);

//     default:
//       return state;
//   }
// };
const filterReducer = createReducer('', {
  [actions.addFilter]: (_, { payload }) => payload,
});
// const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case counterTypes.GET_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// };
export const contactReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
