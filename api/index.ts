import { create } from "apisauce";

export const SERVER_URI =
  process.env.SERVER_URI || "http://192.168.26.86:8000/api/v1";

const api = create({
  baseURL: SERVER_URI,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
