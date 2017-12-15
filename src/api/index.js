import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'

import axiosConfigure from './conf/axios.conf'

let axiosInstance = axios.create(axiosConfigure.axiosInstanceConfigure);

axiosInstance.interceptors.request.use(axiosConfigure.axiosInterceptorsConfigure.request.resolve, axiosConfigure.axiosInterceptorsConfigure.request.reject);
axiosInstance.interceptors.response.use(axiosConfigure.axiosInterceptorsConfigure.response.resolve, axiosConfigure.axiosInterceptorsConfigure.response.reject);

Vue.use(vueAxios, axiosInstance);
