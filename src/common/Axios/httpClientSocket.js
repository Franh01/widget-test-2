import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_SOCKET_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
