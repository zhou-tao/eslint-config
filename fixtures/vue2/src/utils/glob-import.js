/**
 * @description 批量导入Vuex Modules
 */
export function importVuexModules() {
  const VuexModules = {}
  const modules = import.meta.glob('../store/modules/*.js', { eager: true })
  for (const path in modules) {
    const name = path.match(/modules\/(\S*).js/)[1]
    VuexModules[name] = modules[path].default
  }
  return VuexModules
}
