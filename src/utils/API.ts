import axios from "axios";
export const LOGIN_API = axios.create({
  baseURL: "https://uatopenapi.stoxkart.com",
  // timeout: 5000,
  withCredentials: true,
  headers: {
    "X-Platform": "web",
  },
});

export const API = axios.create({
  baseURL: "https://uatopenapi.stoxkart.com",
  withCredentials: true,
  timeout: 1000000,
});
