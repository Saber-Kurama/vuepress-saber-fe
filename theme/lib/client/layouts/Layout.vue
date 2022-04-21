<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
import {
  ClientOnly,
  usePageData, usePageFrontmatter 
} from '@vuepress/client'
import HeaderNotification from '../components/HeaderNotification.vue';
import Navbar from '../components/Navbar.vue';
import Home from '../components/Home.vue';
import DocsHome from '../components/DocsHome.vue';
import Page from '../components/Page.vue';
import Sidebar from '../components/Sidebar.vue'
import type { DefaultThemeHomePageFrontmatter } from '../../shared'
import { resolveSidebarItems } from '../util';

const frontmatter = usePageFrontmatter<DefaultThemeHomePageFrontmatter>()
const page = usePageData();
console.log('frontmatter', frontmatter)
console.log('pagepage????', page)
// close sidebar after navigation
const codesandbox = reactive<any>({url: null})
const sidebarItems = computed(() => {
 
  return []
  // return resolveSidebarItems()
})
const isSidebarOpen = ref(false);
const toggleSidebar = (to: any) => {
  isSidebarOpen.value = typeof to === 'boolean' ? to : !isSidebarOpen.value
}
let unregisterRouterHook
onMounted(() => {
  const router = useRouter()
  unregisterRouterHook = router.afterEach(() => {
    // toggleSidebar(false)
    
  })
})
onUnmounted(() => {
  unregisterRouterHook()
})
</script>
<template>
  <div id="vs-app" class="theme-container">
    <transition name="fade-code">
      <div v-if="codesandbox.url" class="con-codesandbox"> {{ codesandbox.url }}</div>
    </transition>
    <HeaderNotification />
    <ClientOnly>
      <Navbar></Navbar>
    </ClientOnly>
    <div
      class="sidebar-mask"
    ></div>
    <Home v-if="frontmatter.home" ></Home>
    <DocsHome v-else-if="frontmatter.docsHome"/>
    <!-- :sidebar-items="sidebarItems" -->
    <Page
      v-else
    >
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
    </Page>
     <Sidebar
      v-if="!frontmatter.home" 
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>
  </div>
</template>
<style lang="scss">
.fade-code-enter-active,
.fade-code-leave-active {
  transition: opacity 0.5s;
}
.fade-code-enter,
.fade-code-leave-to {
  opacity: 0;
}
.darken {
  .con-codesandbox {
    background: rgba(0, 0, 0, 0.7);
  }
}
.con-codesandbox {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100001;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  .con-iframe {
    max-width: 1200px;
    width: 100%;
  }
}
</style>