<template>
  <el-aside
    v-if="isSideMenu"
    :width="menuCollapsed ? '54px' : '260px'"
    border-r="solid root_light"
    dark:border-r="root_dark"
    overflow-x="hidden"
    pb="12"
    box="border"
    bg="page"
    transition-width
    duration-400
    ease-in-out
  >
    <LogoView />
    <AppMenu />
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import AppMenu from './components/menu/index.vue'
import LogoView from './components/LogoView.vue'

export default {
  name: 'LayoutSider',
  components: {
    AppMenu,
    LogoView
  },
  computed: {
    ...mapGetters(['isSideMenu', 'menuCollapsed'])
  }
}
</script>
