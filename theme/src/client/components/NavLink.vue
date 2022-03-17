<script lang="ts" setup>
import { computed } from "vue";
import {
  ClientOnly,
  useRouteLocale,
  useSiteLocaleData,
  withBase,
} from "@vuepress/client";
import { isExternal, isMailto, isTel, ensureExt } from "../util";

const siteLocale = useSiteLocaleData();
const props = defineProps<{
  item: any;
}>();
const link = computed(() => ensureExt(props.item.link));
const exact = computed(() => {
  if (siteLocale.value.locales) {
    return Object.keys(siteLocale.value.locales).some(
      (rootLink) => rootLink === link.value
    );
  }
  return link.value === "/";
});
</script>
<template>
  <router-link
    class="nav-link"
    v-if="!isExternal(link)"
    :to="link"
    :exact="
      exact ||
      ($route.path.indexOf('/guide/') !== -1 &&
        item.text === 'Documentation') ||
      item.text === 'Button'
    "
  >
    {{ item.text }}
    <i class="bx bx-chevron-down"></i>
  </router-link>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <!-- <OutboundLink/> -->
  </a>
</template>
<style lang="scss">
.nav-item {
  i.bx:not(.bx-dots-horizontal-rounded) {
    display: none;
  }
  i.bx.not-remove {
    display: block !important;
  }
  > div > .nav-link {
    display: flex !important;
    align-items: center;
    justify-content: center;
    i.bx {
      display: block;
      font-size: 1rem;
      transition: all 0.2s ease;
      transform-origin: center;
      width: 16px;
      height: 16px;
      position: relative;
    }
  }
}
</style>
