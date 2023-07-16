<template>
  <div
    w="420px"
    p="8"
    bg="#ffffff90 dark:#22222290"
    rounded-xl
    shadow-xl
  >
    <h1
      text="3xl primary center"
      font="semibold"
    >
      {{ $store.getters.appTitle }}
    </h1>
    <div
      m="t-12"
      flex="~ col"
    >
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            size="large"
            placeholder="账号"
          />
        </el-form-item>
        <el-form-item
          prop="password"
          :style="{ marginTop: '38px' }"
        >
          <el-input
            v-model="loginForm.password"
            type="password"
            size="large"
            placeholder="密码"
            show-password
            @keyup.native.enter="doLogin"
          />
        </el-form-item>
        <el-form-item>
          <div
            w="360px"
            flex="center justify-between"
          >
            <el-checkbox v-model="loginForm.rememberMe">
              记住密码
            </el-checkbox>
            <span
              text="sm primary"
              cursor="pointer"
            >
              忘记密码?
            </span>
          </div>
        </el-form-item>
        <el-form-item :style="{ marginTop: '36px' }">
          <el-button
            auto-insert-space
            w="full"
            size="large"
            type="primary"
            :loading="loading"
            @click="doLogin"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loading: false,
      loginForm: {
        username: '',
        password: '',
        rememberMe: false
      },
      loginRules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    async doLogin() {
      await this.$refs.loginFormRef.validate()
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$router.push('/home')
      }, 1500)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
