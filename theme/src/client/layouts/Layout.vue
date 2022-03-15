<script setup lang="ts">
import { onMounted, onUnmounted, reactive } from 'vue';
import { useRouter } from 'vue-router'
import HeaderNotification from '../components/HeaderNotification.vue';
import Navbar from '../components/Navbar.vue';
// close sidebar after navigation
const codesandbox = reactive<any>({url: null})
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
    <Content />
  </div>
</template>