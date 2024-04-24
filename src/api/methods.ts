import axios, { AxiosError } from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: {
        ['Content-Type']: "application/json; charset=utf8",
        ['Access-Control-Allow-Origin']: "*"
    }
});

api.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`    

        return config;
    }
)

export const methods = {}
