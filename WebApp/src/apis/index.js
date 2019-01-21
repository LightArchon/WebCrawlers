//引入axios
import axios from "axios";
import Qs from "qs";

const ajax = axios.create({
  baseURL: "/apis",
  timeout: 1000,
  headers: { "X-Requested-With": "XMLHttpRequest" },
  params: {},
  transformRequest: [
    function(data, headers) {
      // Do whatever you want to transform the data
      data = Qs.stringify(data);
      return data;
    }
  ],

  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [
    function(data) {
      // Do whatever you want to transform the data

      return data;
    }
  ]
});
/*请求拦截器（请求之前的操作）*/
ajax.interceptors.request.use(
  config => {
    return config;
  },
  /*错误操作*/
  err => {
    return Promise.reject(err);
  }
);

/*请求之后的操作*/
ajax.interceptors.response.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

export default ajax;
