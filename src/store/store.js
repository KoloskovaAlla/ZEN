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

export const store = configureStore({
  reducer: rootReducer,
});
