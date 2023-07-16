<template>
  <div
    h="header"
    px-6
    flex="center"
    justify="between"
    border-b="solid root_light dark:root_dark"
  >
    <div flex items="center" gap="6">
      <span v-if="isSideMenu" cursor="pointer" leading="0" @click="toggleCollapse">
        <div v-show="menuCollapsed" i-ep-expand />
        <div v-show="!menuCollapsed" i-ep-fold />
      </span>
      <LogoView v-else mr="6" />
      <Breadcrumb v-if="showBreadcrumb && isSideMenu" />
    </div>
    <AppMenu v-if="!isSideMenu" :mode="MenuLayout.HORIZONTAL" />
    <div flex items="center" gap="5">
      <el-dropdown>
        <el-badge is-dot leading="none">
          <div class="icon-view">
            <div i-ep-bell-filled />
          </div>
        </el-badge>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              您有一条新消息！
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- <ThemeSwitch /> -->
      <div cursor="pointer" ml="6">
        <el-dropdown>
          <div flex items="center">
            <el-image fit="cover" :src="userInfo.avatar" w-8 h-8 rounded-full shadow-lg b="solid light opacity-40" />
            <span text="base" ml="2">{{ userInfo.username }}</span>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="$router.push('/personal/info')">
                <div i-ep-user mt--2px />个人中心
              </el-dropdown-item>
              <el-dropdown-item
                divided
                @click="$router.replace('/login?redirect=logout')"
              >
                <div i-ep-switch-button mt--2px />注销登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LogoView from '../sider/components/LogoView.vue'
import AppMenu from '../sider/components/menu/index.vue'
import Breadcrumb from './components/Breadcrumb.vue'

// import ThemeSwitch from '@/components/ThemeSwitch'
import { MenuLayout } from '@/enums'

export default {
  name: 'LayoutHeader',
  components: {
    Breadcrumb,
    // ThemeSwitch,
    LogoView,
    AppMenu
  },
  data() {
    return {
      MenuLayout
    }
  },
  computed: {
    ...mapGetters(['showBreadcrumb', 'menuCollapsed', 'isSideMenu', 'userInfo'])
  },
  methods: {
    ...mapActions('app', ['toggleCollapse'])
  }
}
</script>

<style scoped lang="scss">
.icon-view {
  @apply w-8 h-8 rounded-full flex-center bg-light cursor-pointer text-18px transition-base hover:bg-light_hover;
}

:deep(.el-dropdown [role=button]) {
  outline: none;
}
</style>
