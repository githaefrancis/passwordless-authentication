import axios from "axios";
const url = process.env.BACKEND_URL;

axios.defaults.baseURL = url;

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("jwtToken");

  request.headers.Authorization = "Token " + token;

  return request;
});

axios.interceptors.response.use((response) => {
  return response;
});

export default axios;
