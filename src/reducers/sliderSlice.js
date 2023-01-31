import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  slides: [],
};

export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setSlides: (state, action) => {
      state.slides = [...state.slides, action.payload];
    },
  },
});

export const { reducer: sliderReducer } = sliderSlice;

export const { setSlides } = sliderReducer.actions;
