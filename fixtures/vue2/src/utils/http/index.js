import {
  ContentTypeEnum,
  ErrorCodeEnum,
  HttpMethodEnum,
  ResponseTypeEnum
} from '@/enums'
import { CustomAxios } from '@/utils/http/Axios'
import { ErrorMsgMap } from '@/utils/http/checkStatus'

// 默认请求配置 (优先级低于实际 api请求内 config)
export const useFetch = new CustomAxios({
  // 请求前缀
  baseURL: import.meta.env.VITE_BASE_API,

  // 限制超时时长
  timeout: 3000,

  // 超时错误提示
  timeoutErrorMessage: ErrorMsgMap.get(ErrorCodeEnum.A200),

  // 请求类型
  method: HttpMethodEnum.GET,

  // 请求头
  headers: {
    'Content-Type': ContentTypeEnum.JSON
  },

  // 是否携带token
  withToken: true,

  // 是否进行响应数据转换
  isTransformResponse: true,

  // 响应体类型
  responseType: ResponseTypeEnum.JSON,

  // 忽略 CancelToken
  ignoreCancelToken: false
})
