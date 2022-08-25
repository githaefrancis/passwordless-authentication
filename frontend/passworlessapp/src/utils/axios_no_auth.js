import axios from "axios";
const url = 'http://localhost:7500';

axios.defaults.baseURL = url;

axios.interceptors.response.use((response) => {
  return response;
});

export default axios;