import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previewDetails: null,
  isDarkClicked: false,
};

export const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    setPreviewDetails: (state, action) => {state.previewDetails = action.payload},
    setIsDarkClicked: () => {},
  },
});

export const { reducer: previewReducer } = previewSlice;

export const { setPreviewDetails, setIsDarkClicked } = previewSlice.actions;
