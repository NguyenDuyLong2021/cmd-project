//
import axios from 'axios'
import queryString from 'query-string'

// Thiết lập cấu hình mặc định cho http request
const axiosClient = axios.create({
    // baseURL: process.env.REACT_APP_API_URL ||"http://127.0.0.1:3000",
    baseURL: "http://127.0.0.1:3000",
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params)
});
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here...
    console.log("config nè ",config)
    return config
})
axiosClient.interceptors.request.use((response) => {
    if (response && response.data){
        return response.data
    }
    return response
}, (error) => {
    // Handle errors
    throw error
});

export default axiosClient