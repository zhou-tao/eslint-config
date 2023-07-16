<template>
  <div
    h="header"
    flex
    justify="center"
    items="center"
    cursor="pointer"
    @click="router.push('/home')"
  >
    <img src="@/assets/img/logo.svg" alt="logo" width="28">
    <h1
      v-show="!menuCollapsed"
      text="xl main hover:regular"
      ml="2"
      font="bold mono"
      whitespace-nowrap
      select-none
    >
      {{ appTitle }}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LogoView',
  computed: {
    ...mapGetters(['appTitle', 'menuCollapsed'])
  }
}
</script>

<style lang="scss" scoped></style>
