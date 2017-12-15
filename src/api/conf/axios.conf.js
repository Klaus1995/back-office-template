import qs from 'qs'
import API from './../api'

//ajax基础设置
let axiosInstanceConfigure = {
  baseURL: API.DOMAIN,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  transformRequest: []
};

//ajax拦截器
let axiosInterceptorsConfigure = {
  request: {
    resolve: function (req) {
      return req
    },
    reject: function (error) {
      console.log(error);
      return Promise.reject(error)
    }
  },
  response: {
    resolve: function (res) {
      return res
    },
    reject: function (error) {
      console.log(error.response);
      return Promise.reject(error)
    }
  }
};

//handle headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
if (axiosInstanceConfigure.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=utf-8') {
  let formatFn = function (data) {
    data = qs.stringify(data);
    return data
  };

  axiosInstanceConfigure.transformRequest.push(formatFn);
}

export default {
  axiosInstanceConfigure,
  axiosInterceptorsConfigure
}
