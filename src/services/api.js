import axios from "axios";

export const baseURL = "https://m2devadmin.softkuka.com.br/api";

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(async (config) => {
  if (window.localStorage.getItem("token")) {
    const token = window.localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;