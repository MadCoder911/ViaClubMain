import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};
const appSlice = createSlice({
  name: "app",
  initialState,
});
export default appSlice.reducer;
