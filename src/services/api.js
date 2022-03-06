import axios from "axios";
require("dotenv/config");

import { getToken } from "./auth";

const api = axios.create({
    url : process.env.REACT_APP_API_URL
})


api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  

export default api;