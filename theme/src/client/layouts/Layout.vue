<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'
// close sidebar after navigation
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
    <Content />
  </div>
</template>