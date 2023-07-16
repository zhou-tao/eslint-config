<template>
  <div :class="`menu--${mode}`">
    <el-menu
      router
      border-r="0"
      :mode="mode"
      :collapse="menuCollapsed"
      :default-active="$route?.meta?.activeMenu || activeRoute.path"
    >
      <MenuItem
        v-for="menu in menuData"
        :key="menu.index"
        v-bind="menu"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { MenuItem as ElMenuItem, Submenu as ElSubMenu } from 'element-ui'
import MenuItem from './MenuItem.vue'
import AdminRoutes from '@/router/routes/modules/admin'
import { MenuLayout } from '@/enums'

export default {
  name: 'AppMenu',
  components: {
    MenuItem
  },
  props: {
    mode: {
      type: String,
      default: MenuLayout.VERTICAL
    }
  },
  data() {
    return {
      MenuLayout
    }
  },
  computed: {
    ...mapGetters(['menus', 'menuCollapsed']),
    activeRoute() {
      return this.$route.matched.findLast(r => !r?.meta?.hideMenu) || this.$route
    },
    menuData() {
      return this.routeToMenu(AdminRoutes.concat(this.menus))
    }
  },
  methods: {
    resolveFullPath(route) {
      if (!route.path) return ''
      const { resolved } = this.$router.resolve(route)
      return resolved?.fullPath || route.path
    },
    routeToMenu(routes) {
      return routes.filter(route => !route?.meta?.hide).map((r) => {
        const childMenu = r.children && r.children.filter(child => !child.meta?.hideMenu)
        return {
          title: r?.meta?.title || 'title',
          index: this.resolveFullPath(r) || r.name,
          component: childMenu?.length ? ElSubMenu : ElMenuItem,
          icon: r?.meta?.icon,
          ...(childMenu?.length && { children: this.routeToMenu(childMenu) })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu--horizontal {
    @apply flex-1;

    :deep(.el-menu) {
      @apply justify-center;

      &.el-menu--horizontal {
        @apply border-b-0;
      }
    }
  }

  // 顶层无法穿透样式
  .menu--vertical :deep(.el-menu) {
    .el-sub-menu__title, .el-menu-item {
      @apply h-12 text-regular select-none;
      .icon {
        @apply mr-10px text-base;
      }

      &:hover {
        @apply bg-transparent text-primary;
      }

      &.is-active {
        @apply bg-primary text-white;

        &::before {
          @apply bg-primary;
        }
      }
    }

    &.el-menu--collapse {
      @apply p-0 w-full;

      .el-sub-menu__title, .el-menu-item {
        padding: 0 !important;

        &:hover {
          @apply text-regular;
        }

        .el-menu-tooltip__trigger  {
          @apply p-0;
        }

        .icon {
          @apply my-0 mx-auto text-base;
        }

        // &.is-active {
        //   @apply text-primary bg-transparent;
        // }
      }
    }
  }
</style>
