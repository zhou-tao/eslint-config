import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import { importVuexModules } from '@/utils/glob-import'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: importVuexModules()
})
