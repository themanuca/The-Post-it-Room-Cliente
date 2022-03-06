import axios from "axios";
//require("dotenv/config");

//import { getToken } from "./auth";

const api = axios.create({
    url : process.env.REACT_APP_API_URL
})




export default api;