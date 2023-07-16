/**
 * @description: 开发环境
 */
export const devMode = 'development'

/**
 * @description: 生产环境
 */
export const prodMode = 'production'

/**
 * @description: 获取当前环境模式
 */
export function getEnv() {
  return import.meta.env.MODE
}

/**
 * @description: 是否为开发环境
 */
export function isDevMode() {
  return import.meta.env.DEV
}

/**
 * @description: 是否为生产环境
 */
export function isProdMode() {
  return import.meta.env.PROD
}
