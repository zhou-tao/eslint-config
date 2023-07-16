import qs from 'qs'
import axios from 'axios'
import { useCookie } from '@h/web/useCookie'
import { ContentTypeEnum, HttpMethodEnum, TokenTypeEnum } from '@/enums'
import { AxiosCanceler } from '@/utils/http/axiosCancel'
import checkStatus from '@/utils/http/checkStatus'
import {
  generateBaseToken,
  transformRequest,
  transformResponse
} from '@/utils/http/helper'
import store from '@/store'

/**
 *  @description: axios 实例化封装
 */
export class CustomAxios {
  // 初始化 axios实例默认配置时，无需设置 url
  constructor(options) {
    this.axiosInstance = axios.create(options)
    // 设置拦截器
    this.setupInterceptors()
  }

  createAxios(config) {
    this.axiosInstance = axios.create(config)
  }

  /**
   * @description: 获取实例
   * @returns axiosInstance
   */
  getAxios() {
    return this.axiosInstance
  }

  /**
   * @description: 配置 axios
   * @param {RequestConfig} config
   */
  configAxios(config) {
    if (!this.axiosInstance) return
    this.createAxios(config)
  }

  /**
   * @description: 设置 axios拦截器
   */
  setupInterceptors() {
    const axiosCanceler = new AxiosCanceler()
    // 请求拦截
    this.axiosInstance.interceptors.request.use(
      async (config) => {
        const { headers, withToken, ignoreCancelToken } = config
        // 当请求函数内未设置 ignoreCancelToken 时才采用默认初始化配置
        const ignoreCancel
          = ignoreCancelToken !== undefined
            ? ignoreCancelToken
            : this.options?.ignoreCancelToken
        !ignoreCancel && axiosCanceler.addPending(config)
        if (withToken) {
          let accessToken = useCookie(TokenTypeEnum.ACCESS_TOKEN)
          if (!accessToken) {
            // 取消上次请求
            axiosCanceler.removePending(config)
            const { access_token } = await store.dispatch('user/reLogin')
            accessToken = access_token
          }
          headers.Authorization = generateBaseToken(accessToken)
        }
        return config
      },
      undefined
    )

    // 响应拦截
    this.axiosInstance.interceptors.response.use(
      (res) => {
        axiosCanceler.removePending(res.config)
        return res
      },
      async (err) => {
        const response = err.response
        // 满足 isAxiosError 或 isCancel 的请求均已被 axios取消
        const canBeRemove = !axios.isAxiosError(err) && !axios.isCancel(err)
        canBeRemove && axiosCanceler.removePending(response.config)
        checkStatus(
          response?.status,
          response?.data?.message || err?.message || '',
          axios.isCancel(err)
        )
        return Promise.reject(err)
      }
    )
  }

  /**
   * @description: content-type 为 application/x-www-form-urlencoded 时进行数据 qs转换
   * @param {RequestConfig} config
   * @returns config
   */
  supportFormData(config) {
    const { headers } = config || this.options
    const contentType = headers?.['Content-Type'] || headers?.['content-type']
    if (
      contentType !== ContentTypeEnum.FORM_URLENCODED
      || !Reflect.has(config, 'data')
      || config.method === HttpMethodEnum.GET
    ) {
      return config
    }
    return {
      ...config,
      data: qs.stringify(config.data, { arrayFormat: 'brackets' })
    }
  }

  uploadFile() {}

  downloadFile() {}

  GET(config) {
    return this.request({ ...config, method: HttpMethodEnum.GET })
  }

  POST(config) {
    return this.request({ ...config, method: HttpMethodEnum.POST })
  }

  PUT(config) {
    return this.request({ ...config, method: HttpMethodEnum.PUT })
  }

  DELETE(config) {
    return this.request({ ...config, method: HttpMethodEnum.DELETE })
  }

  request(config) {
    // 合并请求配置，优先级由低到高为：options(初始化实例参数) -> config(具体请求参数)
    let conf = Object.assign({}, this.options, config)
    conf = this.supportFormData(conf)
    conf = transformRequest(conf)
    if (conf.useMock) {
      conf.url = `/mock${conf.url}`
    }
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request(conf)
        .then((res) => {
          try {
            resolve(transformResponse(res, conf))
          } catch (err) {
            reject(err || new Error('请求失败!'))
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
