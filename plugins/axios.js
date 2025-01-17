import axios from "axios";
import Cookies from "js-cookie";

const $axios = axios.create({
  baseURL: "https://api.curbex.xyz",
});

$axios.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get("token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $axios;
