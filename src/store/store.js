import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { langReducer } from 'reducers';
import { themeReducer } from 'reducers';

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
