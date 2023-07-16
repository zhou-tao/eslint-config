import { AppTheme, MenuLayout } from '@/enums'

export default {
  // app
  appTitle: state => state.app.title,
  showProgress: state => state.app.showProgress,
  showBreadcrumb: state => state.app.showBreadcrumb,
  showPageTab: state => state.app.showPageTab,
  showPageTransition: state => state.app.showPageTransition,
  showFooter: state => state.app.showFooter,
  menuCollapsed: state => state.app.menuCollapsed,
  isDarkTheme: state => state.app.theme === AppTheme.DARK,
  isSideMenu: state => state.app.menuLayout === MenuLayout.VERTICAL,
  visitedViews: state => state.app.visitedViews,

  // user
  userInfo: state => state.user.info,
  menus: state => state.user.menus
}
