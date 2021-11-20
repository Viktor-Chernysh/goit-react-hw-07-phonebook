// import * as counterTypes from './counter-types';
import { createAction } from '@reduxjs/toolkit';

export const addNewContact = createAction('contact/addContact');
// export const addNewContact = contact => ({
//   type: counterTypes.GET_CONTACT,
//   payload: contact,
// });
export const deleteContact = createAction('contact/deleteContact');
// export const deleteContact = id => ({
//   type: counterTypes.DELETE_CONTACT,
//   payload: id,
// });
export const addFilter = createAction('contact/getFilter');
// export const addFilter = value => ({
//   type: counterTypes.GET_FILTER,
//   payload: value,
// });
