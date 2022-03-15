<script lang="ts" setup>
import {
  ClientOnly,
  useRouteLocale,
  useSiteLocaleData,
  withBase,
} from '@vuepress/client'
import { computed } from 'vue';
import { useDarkMode, useThemeLocaleData } from '../composables'

const routeLocale = useRouteLocale()
const siteLocale = useSiteLocaleData()
const themeLocale = useThemeLocaleData()
const userNav = computed(() => {
  return siteLocale.value 
})
</script>
<template>
  <nav class="nav-links"></nav>
</template>
<style lang="scss">
.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
