<script lang="ts" setup>
import { ref } from 'vue';

const open = ref(false);
</script>
<template>
  <div
    class="dropdown-wrapper"
    :class="{ open }"
  >
  </div>
</template>