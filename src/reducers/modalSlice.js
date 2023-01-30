import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalActive: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsModalActive: (state, action) => {
      state.isModalActive = action.payload;
    },
  },
});

export const { reducer: modalReducer } = modalSlice;

export const { setIsModalActive } = modalSlice.actions;
