// axiosInterceptor.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5454/", // Replace with your API base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify the request config before sending
    // You can add headers, authentication tokens, etc.

    // Check if there is a JWT token stored (replace 'your_jwt_token_key' with the actual key)
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }

    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    // Handle request errors
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data before resolving
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    // Handle response errors
    console.error("Response Error:", error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
