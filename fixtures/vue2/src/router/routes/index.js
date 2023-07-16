import LoginRoutes from './modules/login'
import AdminRoutes from './modules/admin'
import ErrorRoutes from './modules/error'

const BaseRoutes = [
  {
    path: '/',
    redirect: '/login'
  }
]

export default BaseRoutes.concat(LoginRoutes, AdminRoutes, ErrorRoutes)
