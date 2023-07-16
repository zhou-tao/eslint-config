<template>
  <component :is="component" :index="index">
    <div v-if="icon && !isSubMenu" :class="`${icon} icon`" />
    <template #title>
      <div v-if="icon && isSubMenu" :class="`${icon} icon`" />
      <span>{{ title }}</span>
    </template>
    <template v-if="children?.length">
      <MenuItem v-for="child in children" :key="child.index" v-bind="child" />
    </template>
  </component>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    component: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String,
      default: ''
    },
    index: {
      type: String,
      default: 'menu'
    },
    icon: {
      type: String,
      default: ''
    },
    children: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isSubMenu() {
      return !!this.children?.length
    }
  }
}
</script>
