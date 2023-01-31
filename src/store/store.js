import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { langReducer } from 'reducers';
import { themeReducer } from 'reducers';
import { modalReducer } from 'reducers';
import { sliderReducer } from 'reducers';
import {previewReducer} from 'reducers'

const rootReducer = combineReducers({
  langReducer,
  themeReducer,
  modalReducer,
  sliderReducer,
  previewReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
