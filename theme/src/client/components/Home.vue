<script lang="ts" setup>
import { usePageFrontmatter, useSiteLocaleData } from "@vuepress/client";
import { computed, ref } from "vue";
import type { DefaultThemePageFrontmatter } from "../../shared";
import NavLink from "./NavLink.vue";

const siteLocale = useSiteLocaleData();
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();
const star = ref(0);
const github = ref(false);
const discord = ref(false);
const vuesax = ref(false);
const expand = ref(false);
const actionLink = computed(() => ({
  link: frontmatter.value.actionLink,
  text: frontmatter.value.actionText,
}));
const numberWithCommas = computed(() => {
  const x = star.value;
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(".");
});

const time = (val) => {};
</script>
<template>
  <main class="home" aria-labelledby="main-title">
    <div class="init">
      <header class="hero">
        <div class="points-init">
          <span v-for="span in 16" :key="span"></span>
        </div>
        <div class="circle-init"></div>
        <div class="content-hero">
          <h1
            v-if="frontmatter.heroText !== null"
            v-html="frontmatter.heroText || siteLocale.title || 'Hello'"
            id="main-title"
          />
          <p
            v-html="
              frontmatter.tagline ||
              siteLocale.description ||
              'Welcome to your VuePress site'
            "
            class="description"
          />
          <div class="con-btns">
            <!-- <NavLink
              @mouseleave.native="time('vuesax')"
              @mouseenter.native="(vuesax = true), (expand = true)"
              title="Get Started"
              class="action-button"
              :item="actionLink"
            /> -->

            <a
              @mouseleave="time('discord')"
              @mouseenter="(discord = true), (expand = true)"
              title="Discord"
              class="discord"
              target="_blank"
              href="https://discord.gg/6AZNXEa"
            >
              <i class="bx bxl-discord"></i>
              Discord
            </a>

            <a
              @mouseleave="time('github')"
              @mouseenter="(github = true), (expand = true)"
              title="Github"
              class="github"
              target="_blank"
              href="https://github.com/lusaxweb/vuesax"
            >
              <i class="bx bxl-github"></i>
              <span title="Stargazers" class="badge-star">
                <!-- <i class='bx bxs-star' ></i> -->
                {{ numberWithCommas }}
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>
  </main>
</template>
<style lang="scss">
@function getColor($colorx, $alpha: 1) {
  @return unquote("rgba(var(--vs-" + $colorx + "), " + $alpha + ")");
}
.darken {
  .init {
    &:after {
      background-image: radial-gradient(
        var(--vs-theme-bg) 0%,
        var(--vs-theme-bg) 30%,
        transparent 70%
      );
    }
  }
  .discord {
    background: var(--vs-theme-bg);
    color: #fff !important;
    i {
      color: #fff !important;
    }
  }
  .badge-star {
    background: var(--vs-theme-bg2);
    color: #fff;
  }
}
.init {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  position: relative;
  // &:after
  //   content ''
  //   background-image: radial-gradient(var(--vs-theme-bg2) 0%, var(--vs-theme-bg) 40%, transparent 75%);
  //   // background #000
  //   position absolute
  //   top 0px
  //   right 0px
  //   width 60%
  //   height 100%
  //   z-index 1
  .points-init {
    width: 100px;
    height: 100px;
    top: 200px;
    left: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    span {
      width: 25px;
      height: 25px;
      display: block;
      transition: all 0.25s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        &:after {
          background: getColor("primary");
          width: 12px;
          height: 12px;
          box-shadow: 0px 4px 10px 0px getColor("primary", 0.2);
        }
      }
      &:after {
        content: "";
        position: relative;
        width: 6px;
        height: 6px;
        background: var(--vs-theme-bg2);
        border-radius: 50%;
        transition: all 0.25s ease;
      }
    }
  }
  .circle-init {
    position: absolute;
    width: 430px;
    height: 430px;
    border: 40px solid var(--vs-theme-bg);
    border-radius: 50%;
    bottom: -80px;
    left: -200px;
    z-index: -1;
    transition: all 0.25s ease;
    &:hover {
      border: 40px solid var(--vs-theme-bg2);
    }
  }
  .hero {
    width: 50%;
  }
}
.badge-star {
  position: absolute;
  top: -8px;
  right: -25px;
  font-size: 0.7rem;
  background: var(--vs-theme-color);
  color: var(--vs-theme-layout);
  border-radius: 8px 8px 8px 4px;
  padding: 2px 5px;
  font-weight: normal;
  z-index: 100;
  i {
    font-size: 0.6rem !important;
  }
}
.con-btns {
  display: flex;
  align-items: center;
  justify-content: center;
}
.discord {
  border: 0px;
  padding: 11px 25px;
  margin: 0px 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 14px;

  transition: all 0.25s ease;
  font-size: 0.8rem;
  &:after {
    border-radius: inherit;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid var(--vs-theme-color);
    opacity: 0.2;
    transition: all 0.25s ease;
    background: transparent;
    box-shadow: 0px 0px 0px 0px var(--vs-theme-color);
  }
  &:hover {
    &:after {
      opacity: 1;
    }
  }
  i {
    font-size: 1.4rem;
    margin-right: 3px;
  }
}
.github {
  padding: 10px 20px;
  margin: 0px 10px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 14px;
  &:hover {
    &:after {
      opacity: 1;
    }
  }
  &:after {
    border-radius: inherit;
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid var(--vs-theme-color);
    opacity: 0.2;
    transition: all 0.25s ease;
    background: transparent;
    box-shadow: 0px 0px 0px 0px var(--vs-theme-color);
  }
  i {
    font-size: 1.4rem;
  }
  &.github {
    padding: 10px;
    margin-left: 0px;
  }
}
.home {
  margin: 0px auto;
  display: block;
  width: 100%;
  overflow: hidden;
  background: var(--vs-theme-layout);
  ~ .config {
    left: 0px;
  }
  #main-title {
    font-size: 2rem;
    font-weight: normal;
    a {
      text-decoration: underline;
    }
  }
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 800px;
    padding-top: 60px;
    padding: 20px;
    .content-hero {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 40px 60px;
    }
    img {
      max-width: 100%;
      max-height: 280px;
      display: block;
      margin: 3rem auto 1.5rem;
    }
    h1 {
      font-size: 2.3rem !important;
      text-align: left;
      margin-bottom: 15px;
    }
    h1,
    .description,
    .action {
      text-align: left;
    }
    .description {
      max-width: 35rem;
      font-size: 1.1rem;
      line-height: 1.3;
      color: var(--vs-theme-color);
      opacity: 0.6;
      margin-top: 0px;
    }
    .action-button {
      display: inline-block;
      font-size: 0.8rem;
      color: #fff !important;

      background: getColor("primary");
      padding: 13px 25px;
      border-radius: 17px;
      transition: background-color 0.1s ease;
      box-sizing: border-box;
      transition: all 0.25s ease;
      box-shadow: 0px 10px 20px -10px getColor("primary", 0.5);
      i {
        display: none;
      }
      &:hover {
        box-shadow: 0px 20px 20px -10px getColor("primary", 0.5);
        transform: translate(0, -5px);
      }
    }
  }
  .features {
    padding: 1.2rem 0px;
    margin: auto;
    max-width: 1000px;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: stretch;
    justify-content: space-between;
  }
  .feature {
    flex-grow: 1;
    flex-basis: 30% nav-link action-button;
    max-width: 30%;
    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      border-bottom: none;
      padding-bottom: 0;
      color: var(--vs-theme-color);
    }
    p {
      color: var(--vs-theme-color);
      opacity: 0.7;
    }
  }
}
</style>
