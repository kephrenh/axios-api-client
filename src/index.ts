import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface ApiClientConfig extends AxiosRequestConfig {
  baseURL?: string; // Allow users to set their own base URL
}

const createApiClient = (config: ApiClientConfig = {}): AxiosInstance => {
  const apiClient = axios.create({
    baseURL: config.baseURL || "", // Default base URL
    headers: {
      "Content-Type": "application/json",
      ...config.headers, // Allow overriding headers
    },
    ...config, // Spread additional Axios config options
  });

  // Add request interceptor
  apiClient.interceptors.request.use(
    (requestConfig) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
          requestConfig.headers.Authorization = `Bearer ${token}`;
        }
      }
      return requestConfig;
    },
    (error) => Promise.reject(error)
  );

  // Add response interceptor
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.error("Unauthorized access, please log in again.");
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
      return Promise.reject(error);
    }
  );

  return apiClient;
};

export default createApiClient;
