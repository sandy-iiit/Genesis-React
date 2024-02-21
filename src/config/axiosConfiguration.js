
import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});
export const formDataInstance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

export default instance;
