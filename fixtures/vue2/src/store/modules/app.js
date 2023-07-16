import { AppTheme, MenuLayout } from '@/enums'

const state = {
  title: 'Vue2 Starter',
  theme: AppTheme.LIGHT,
  showProgress: true,
  showBreadcrumb: true,
  showPageTab: true,
  showPageTransition: true,
  showFooter: true,
  menuCollapsed: false,
  menuLayout: MenuLayout.VERTICAL,
  visitedViews: []
}

const actions = {
  addVisitedView() {},
  deleteVisitedView() {},
  setVisitedView() {},
  toggleCollapse() {}
}

export default {
  namespaced: true,
  state,
  actions
}
