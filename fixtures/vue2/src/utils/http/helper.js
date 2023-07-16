import { ErrorCodeEnum, HttpMethodEnum, CodeEnum } from '@/enums'
import { alertErrMsg } from '@/utils/message'

// 生成token
export const generateBaseToken = token => `bearer ${token}`

// 请求数据转换
export const transformRequest = (config) => {
  const { data, params, method } = config
  // GET方法时 params来自 自身 或者 data
  if (method === HttpMethodEnum.GET) {
    config.params = params || data
    config.data = undefined
  }
  return config
}

// 响应数据转换
export const transformResponse = (res, config) => {
  if (!config.isTransformResponse) {
    return res.data
  }
  const { code, data, message: msg } = res.data
  if (code === CodeEnum.SUCCESS) {
    return data
  } else {
    alertErrMsg(`${ErrorCodeEnum.B}${code}`, msg)
    throw new Error(code.toString())
  }
}
