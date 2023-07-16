<template>
  <div
    h="screen"
    bg="root"
    flex="center col"
  >
    <img
      src="@/assets/img/not_found.svg"
      width="400"
      alt="not_found"
    >
    <h1
      my="12"
      text="zinc-6 3xl"
      font="bold"
    >
      Oops, page not found!
    </h1>
    <el-button
      mt-12
      round
      plain
      size="large"
      type="primary"
      icon="el-icon-back"
      @click="$router.replace('/login?redirect=404')"
    >
      返回首页
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="scss">

</style>
