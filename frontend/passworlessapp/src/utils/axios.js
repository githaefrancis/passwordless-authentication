import axios from "axios";
const url = "http://localhost:7500";

axios.defaults.baseURL = url;

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("jwt");

  request.headers.Authorization = "Token " + token;

  return request;
});

axios.interceptors.response.use((response) => {
  return response;
});

export default axios;
