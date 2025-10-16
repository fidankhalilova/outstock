import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
});

export const getApi = async (endpoint) => {
    return await AxiosInstance.get(endpoint);
}

export const postApi = (endpoint, payload) => {
    return AxiosInstance.post(endpoint, payload);
}