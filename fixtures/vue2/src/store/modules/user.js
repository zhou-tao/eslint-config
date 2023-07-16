import router from '@/router'

const state = {
  info: {
    username: 'admin',
    avatar: 'https://avatars.githubusercontent.com/u/36221207?v=4'
  },
  menus: []
}

const actions = {
  async reLogin() {
    return { accessToken: '123' }
  },
  logout(_, redirectUrl) {
    router.replace(`/login?redirect=${redirectUrl}`)
  }
}

export default {
  namespaced: true,
  state,
  actions
}
