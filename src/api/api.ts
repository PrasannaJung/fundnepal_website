import axios from "axios";

const api = axios.create({
  baseURL: "http://api.prasannajung.com.np:3000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
