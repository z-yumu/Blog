import axios from "axios";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000, //请求超时
});

// 请求拦截
request.interceptors.request.use(
    // 传入的对象config
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default request
