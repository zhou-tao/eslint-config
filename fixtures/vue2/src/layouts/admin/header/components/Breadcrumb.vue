<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="r in matched"
        :key="r.path"
        v-bind="r.path !== $route.path ? { to: r.path } : {}"
      >
        {{ r.meta.title }}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  computed: {
    matched() {
      return this.$route.matched.filter(v => r?.meta?.hideMenu && r?.meta?.title)
    }
  }
}
</script>

<style lang="scss" scoped></style>
