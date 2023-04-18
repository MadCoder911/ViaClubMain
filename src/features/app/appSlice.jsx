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
// export const submitForm = createAsyncThunk(
//   "/ob2AphM6msSxz711poFhGu",
//   async (thunkAPI, data) => {
//     // const { name, email, phone, message } = initialState;
//     // const data = { name, email, phone, message };
//     try {
//       const resp = await postForm.get("/ob2AphM6msSxz711poFhGu", data, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });
//       thunkAPI.dispatch(clearForm());
//       console.log(resp);

//       return resp.message;
//     } catch (error) {}
//   }
// );
export const submitForm = async (data) => {
  fetch("https://api.sheetmonkey.io/form/ob2AphM6msSxz711poFhGu", {
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
    clearForm: (state) => {
      state.name = "";
      state.email = "";
      state.phone = "";
      state.message = "";
    },
  },
});
export const { openNavbar, closeNavbar, handleFormChange, clearForm } =
  appSlice.actions;
export default appSlice.reducer;
