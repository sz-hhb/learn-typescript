import axios from "axios"
import type { AxiosInstance, InternalAxiosRequestConfig } from "axios"
import type { HYRequestConfig } from "./type"

class HYRequest {
  instance: AxiosInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)

    this.instance.interceptors.request.use(
      (config) => {
        console.log("全局请求成功拦截")
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log("全局响应成功拦截")
        return res.data
      },
      (err) => { 
        return err
      }
    )

    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    )

    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    )
  }

  request<T>(config: HYRequestConfig<T>) {
    // if (config.interceptors?.requestSuccessFn) {
    //   config = config.interceptors.requestSuccessFn(
    //     config as InternalAxiosRequestConfig
    //   )
    // }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // if (config.interceptors?.responseSuccessFn) {
          //   res = config.interceptors.responseSuccessFn(res)
          // }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: "POST" })
  }

  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" })
  }
}

export default HYRequest
