<template>
  <div
    h="tab"
    flex
    justify="between"
    overflow="hidden"
  >
    <el-tabs
      type="card"
      closable
      style="width: calc(100% - 60px)"
      :value="$route.path"
      @tab-click="handleClickTab"
      @tab-remove="handleRemoveTab"
    >
      <el-tab-pane
        v-for="v in visitedViews"
        :key="v.path"
        :name="v.path"
        :label="v?.meta?.title"
      />
    </el-tabs>
    <el-dropdown
      trigger="click"
    >
      <div w-50px center border-l="solid root_light dark:root_dark" cursor-pointer>
        <div i-ep-more-filled />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="refresh = !refresh">
            <div i-ep-refresh mr1 />刷新
          </el-dropdown-item>
          <el-dropdown-item :disabled="isSingleVisitedView" @click="handleRemoveTab($route.path)">
            <div i-ep-close mr1 />关闭当前
          </el-dropdown-item>
          <el-dropdown-item :disabled="isSingleVisitedView" @click="handleRemoveOtherTab">
            <div i-ep-delete mr1 />关闭其他
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LayoutTabs',
  computed: {
    ...mapGetters(['visitedViews']),
    isSingleVisitedView() {
      return this.visitedViews.length === 1
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler({ path, meta }) {
        this.addVisitedView({
          path,
          meta
        })
      }
    }
  },
  methods: {
    ...mapActions('app', ['addVisitedView', 'setVisitedView', 'deleteVisitedView']),
    handleClickTab(tab) {
      this.$router.push(tab.paneName)
    },
    handleRemoveTab(path) {
      this.deleteVisitedView({ path })
      if (path === this.$route.path) {
        const lastTag = this.visitedViews[this.visitedViews.length - 1]
        this.$router.push(lastTag.path)
      }
    },
    handleRemoveOtherTab() {
      this.setVisitedView(this.visitedViews.filter(view => view.path === this.$route.path))
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.el-tabs) {
  flex: 1;
  flex-shrink: 0;
  &.el-tabs--card > .el-tabs__header {
    @apply border-b-none;
    .el-tabs__nav {
      @apply b-0 rounded-0 border-r border-r-solid border-r-root_light dark:border-r-root_dark;
    }

    .el-tabs__item {
      font-weight: 400;
      @apply border-l border-l-solid border-l-root_light dark:border-l-root_dark;

      &:not(.is-active) {
        color: var(--el-text-color-regular);
      }

      &.is-active {
        background-color: var(--el-color-primary-light-9);

        .is-icon-close:hover {
          background-color: var(--el-color-primary);
        }
      }
    }
  }
}
</style>
