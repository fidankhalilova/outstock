import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
});

export const getApi = async (endpoint) => {
    const response = await AxiosInstance.get(endpoint);
    return response?.data;
};

export const postApi = async (endpoint, payload) => {
    const response = await AxiosInstance.post(endpoint, payload);
    return response.data;
};
