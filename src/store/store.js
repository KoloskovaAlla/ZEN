import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { langReducer } from 'reducers';
import { themeReducer } from 'reducers';
import { modalReducer } from 'reducers';
import { sliderReducer } from 'reducers';
import {previewReducer} from 'reducers'
import { currentPageReducer } from 'reducers';

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
  modalReducer,
  sliderReducer,
  previewReducer,
  currentPageReducer
});

// const currentLanguage = localStorage.getItem('lang')
//   ? localStorage.getItem('lang')
//   :  'en';

export const store = configureStore({
  reducer: rootReducer, 
});

// const saveToLocalStorage = (lang) => {
//   localStorage.setItem('lang', lang);
// }

// store.subscribe(() => {
//   saveToLocalStorage('??');
// });

// store.subscribe(() => {
//   saveToLocalStorage(store.getState());
// });
