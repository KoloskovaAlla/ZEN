import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { reducer: themeReducer } = themeSlice;

export const { setTheme } = themeSlice.actions;
