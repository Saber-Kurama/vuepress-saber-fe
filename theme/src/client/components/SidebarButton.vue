<script setup lang="ts">
import { ref } from "vue";
const isOpenSidebar = ref(false);
</script>
<template>
  <button :class="{ openSidebar: isOpenSidebar }" class="sidebar-button">
    <i class="bx bx-menu"></i>
  </button>
</template>
<style lang="scss">
.isSidebarOpen {
  .sidebar-button {
    transform: rotate(90deg);
  }
}
.sidebar-button {
  cursor: pointer;
  display: none;
  position: absolute;
  padding: 0.6rem;
  top: 0.6rem;
  left: 0.2rem;
  outline: none;
  user-select: none;
  background: transparent;
  appearance: none;
  box-shadow: none;
  border: 0px;
  transition: all 0.25s ease;
  color: rgba(var(--vs-theme-color), 1) !important;
  &:focus {
    outline: 0;
  }
  i {
    display: block;
    font-size: 1.8rem;
  }
}
@media (max-width: 1000px) {
  .sidebar-button {
    display: block;
  }
}
</style>
