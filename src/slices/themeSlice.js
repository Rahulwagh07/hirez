// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme(state, value) {
      state.theme = value.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
