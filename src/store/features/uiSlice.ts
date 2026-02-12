import { createSlice } from "@reduxjs/toolkit";

type UiState = {
  isRsvpOpen: boolean;
};

const initialState: UiState = {
  isRsvpOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openRsvp: (state) => {
      state.isRsvpOpen = true;
    },
    closeRsvp: (state) => {
      state.isRsvpOpen = false;
    },
    toggleRsvp: (state) => {
      state.isRsvpOpen = !state.isRsvpOpen;
    },
  },
});

export const { openRsvp, closeRsvp, toggleRsvp } = uiSlice.actions;

export default uiSlice.reducer;
