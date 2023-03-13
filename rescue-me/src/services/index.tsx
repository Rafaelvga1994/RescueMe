import axios from "axios";

export const api = axios.create({
  baseURL: "https://rescueme.onrender.com",
  timeout: 10000,
});
