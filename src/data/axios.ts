import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});
export const privateAxiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});
