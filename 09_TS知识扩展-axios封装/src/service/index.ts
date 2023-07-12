import { BASE_URL, TIMEOUT } from "./config"
import HYRequest from "./request"

export const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

export const hyRequest2 = new HYRequest({
  baseURL: "http://codercba.com:1888/airbnb/api",
  timeout: 8000,
  interceptors: {
    requestSuccessFn: (config) => {
      console.log("airbnb请求成功拦截")
      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      console.log("airbnb响应成功拦截")
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})
