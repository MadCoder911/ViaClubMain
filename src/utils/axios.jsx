import axios from "axios";
export const postForm = axios.create({
  baseURL: "https://api.sheetmonkey.io/form",
});
