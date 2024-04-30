
import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://localhost:4000',
    // baseURL: "http://52.27.64.157:4000",
    baseURL: "https://genesis-server.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});
export const formDataInstance = axios.create({
    // baseURL: 'http://localhost:4000',
    // baseURL: 'http://52.27.64.157:4000',
    baseURL: 'https://genesis-server.onrender.com',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

export default instance;
