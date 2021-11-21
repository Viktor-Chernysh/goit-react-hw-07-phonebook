import { createReducer } from '@reduxjs/toolkit';

import * as actions from './contact-actions';

export const filterReducer = createReducer('', {
  [actions.addFilter]: (_, { payload }) => payload,
});
