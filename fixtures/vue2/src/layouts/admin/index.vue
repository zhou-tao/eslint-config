<script setup name="AdminLayout">
import LayoutHeader from './header/index.vue'
import LayoutSider from './sider/index.vue'
import LayoutTabs from './tabs/index.vue'
import LayoutContent from './content/index.vue'
import LayoutFooter from './footer/index.vue'

</script>

<template>
  <div class="admin-layout" h="screen">
    <el-container h="full" bg="root">
      <LayoutSider />
      <el-container direction="vertical">
        <el-header h="auto" p-0 bg="page">
          <LayoutHeader />
          <LayoutTabs />
        </el-header>
        <el-container direction="vertical" overflow="hidden">
          <div overflow="auto" scrollbar-hide>
            <LayoutContent />
            <LayoutFooter />
          </div>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-main) {
  &::-webkit-scrollbar {
    display: none;
  }
}

:deep(.el-drawer) {
  .el-drawer__header {
    @apply text-main;
  }

  .el-drawer__body {
    padding: 0 20px 20px;
  }
}
</style>
