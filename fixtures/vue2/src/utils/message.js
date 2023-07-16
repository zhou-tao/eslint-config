import { Message } from 'element-ui'
import { ErrorCodeEnum } from '@/enums'

/**
 * @description: 错误码消息提示
 * @param {ERR_CODE} code
 * @param {String} msg
 */
export function alertErrMsg(code = ErrorCodeEnum.C100, msg = '无异常') {
  Message.error(`ERROR ${code}: ${msg}`)
}
