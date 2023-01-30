import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: 'en',
};

export const langSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLang: (state, action) => {(state.lang = action.payload)}
  },
});


export const { reducer: langReducer } = langSlice;

export const { setLang } = langSlice.actions;
