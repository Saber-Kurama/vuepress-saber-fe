<script lang="ts" setup>
import {
  ClientOnly,
  useRouteLocale,
  useSiteLocaleData,
  withBase,
} from "@vuepress/client";
import { computed } from "vue";
import { useDarkMode, useThemeLocaleData } from "../composables";
import { resolveNavLinkItem } from "../util";
import NavLink from "./NavLink.vue";

const routeLocale = useRouteLocale();
const siteLocale = useSiteLocaleData();
const themeLocale = useThemeLocaleData();
const userNav = computed(() => {
  return (themeLocale.value.nav || [
    {
      text: "saber",
      link: `docs/guide/`,
    },
  ]) as any[];
});
// TODO
const nav = computed(() => {
  return userNav.value;
});
const userLinks = computed(() => {
  return nav.value.map((link) => {
    return Object.assign(resolveNavLinkItem(link), {
      items: (link.items || []).map(resolveNavLinkItem),
    });
  });
});
const repoLink = computed(() => {
  const { repo } = themeLocale.value;
  if (repo) {
    return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
  }
});
</script>
<template>
  <nav class="nav-links" v-if="userLinks.length || repoLink">
    <!-- user links -->
    <div class="nav-item" v-for="item in userLinks" :key="item.link">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>
    <!-- repo link -->
    <!-- <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ repoLabel }}
      <OutboundLink/>
    </a> -->
  </nav>
</template>
<style lang="scss">
@import "../styles/variables";
@function getVar($var) {
  @return unquote("var(--vs-" + $var + ")");
}
.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    line-height: 1.4rem;
    color: inherit;
    &:hover,
    &.router-link-active {
      color: var(--vs-theme-color);
    }
  }
  .nav-item {
    position: relative;
    display: inline-block;
    transition: all 0.25s ease;
    a {
      opacity: 0.5;
      transition: all 0.25s ease;
      font-weight: bold;
      display: block;
      padding: 18px;
      &:after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: -3px;
        width: 0px;
        height: 3px;
        background: var(--vs-theme-color);
        border-radius: 2px;
        transition: all 0.25s ease;
      }
      &:hover,
      &.router-link-active {
        opacity: 1 !important;
      }
      &.router-link-active {
        &:after {
          width: 18px;
        }
      }
    }
    &:first-child {
      margin-left: 0;
    }
  }
  .repo-link {
    margin-left: 1.5rem;
  }
}
@media (max-width: $MQMobile) {
  .nav-links {
    .nav-item,
    .repo-link {
      margin-left: 0;
    }
  }
}

@media (min-width: $MQMobile) {
  .nav-links a {
    &:hover,
    &.router-link-active {
      color: getVar(theme-color);
    }
  }
}
</style>
