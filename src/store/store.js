import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {langReducer} from 'reducers'

const rootReducer = combineReducers({
  langReducer,
})

export const store = configureStore({
  reducer: rootReducer
})