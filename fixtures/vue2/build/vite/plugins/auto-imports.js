import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'

export const configAutoImport = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue'],
    globs: ['src/components/*.{vue}'],
    resolvers: [
      // 自动注册 element-ui
      ElementUiResolver({
        importStyle: 'sass'
      })
    ]
  })
}
