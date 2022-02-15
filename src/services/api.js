import axios from "axios";

const api = axios.create({
    url : "http://localhost:5000/"
})

export default api;