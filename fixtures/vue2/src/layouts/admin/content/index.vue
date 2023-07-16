<template>
  <el-main
    p="3 b-0"
    relative
  >
    <transition :name="$store.getters.showPageTransition ? 'fade-slide' : ''">
      <router-view />
    </transition>
  </el-main>
</template>

<style lang="scss" scoped></style>
