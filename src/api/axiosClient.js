import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    params: params => queryString.stringify(params)
})

axiosClient.interceptors.response.use(response => {
    if (response && response.data) {
        return response;
    }
    return response.data;
}, (error) => {
    throw error;
})

export default axiosClient;