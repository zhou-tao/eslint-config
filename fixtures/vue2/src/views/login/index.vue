<template>
  <div
    relative
    w="screen"
    h="screen"
    flex="center"
    justify="around"
    overflow="hidden"
    bg="gradient-light dark:gradient-dark"
  >
    <img src="@/assets/img/login_banner.svg" w="lg">
    <login-form />
  </div>
</template>

<script>
import LoginForm from './components/Form.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style scoped lang="scss">

</style>
