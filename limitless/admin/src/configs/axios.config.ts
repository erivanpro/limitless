import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://limitless-backend-production-578b.up.railway.app",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token"); // ✅ Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;
