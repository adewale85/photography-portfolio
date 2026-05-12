import axios from "axios";


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    })

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error("Global API Error:", error.response?.status);
            return Promise.reject(error)
        }
    )


export default axiosInstance;