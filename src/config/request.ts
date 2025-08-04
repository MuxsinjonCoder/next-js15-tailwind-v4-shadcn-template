import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://mern.uz/api",
  // baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
