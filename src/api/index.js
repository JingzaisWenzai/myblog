import Vue from 'vue'
import axios from 'axios'

let responseInterceptor = function (response) {
  // Do something with response data
  return response
}

let responseErrorInterceptor = function (e) {
  if (e.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (e.response.status === 401) {
      let userMgr = Vue.userManager
      userMgr.signIn()
      return
    } else if (e.response.status === 403) {
      e.message = '您没有该接口的访问权限'
    }
  } else if (e.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    if (e.message === 'Network Error') {
      e.message = '暂时无法连接到服务接口!'
    }
  } else {
    // Something happened in setting up the request that triggered an Error
  }
  // translate error
  let error = (e.response && e.response.data) || {}
  e.code = error.code || (e.response && e.response.status) || 'net::ERR_CONNECTION_REFUSED'
  e.message = error.message || e.message || ''
  e.stackTrace = error.stackTrace || ''
  return Promise.reject(e)
}

let api = axios.create({
  baseURL: window._ENV.apiRoot
})
api.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
export default {
  login: function (params) {
    return api.post('/api/login', params)
  },
  getArticle: function () {
    return api.get('/api/getArticle')
  }
}
