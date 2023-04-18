import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postForm } from "../../utils/axios";
import axios from "axios";
const baseUrl = "https://api.sheetmonkey.io/form";
const initialState = {
  isNavbarOpen: false,
  name: "",
  email: "",
  phone: "",
  message: "",
  isLoading: "false",
};

export const submitForm = async (data) => {
  fetch("https://api.sheetmonkey.io/forms/vB1pUYCBvUqnSarEvAgsd6", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((result) => {
    return result.message;
  });
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openNavbar: (state) => {
      state.isNavbarOpen = true;
    },
    closeNavbar: (state) => {
      state.isNavbarOpen = false;
    },
    handleFormChange: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
});
export const { openNavbar, closeNavbar, handleFormChange } = appSlice.actions;
export default appSlice.reducer;
