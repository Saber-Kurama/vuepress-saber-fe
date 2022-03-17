<script setup lang="ts">
import SidebarButton from "./SidebarButton.vue";
import NavLinks from "./NavLinks.vue";
import SearchBox from './SearchBox.vue'; 
import { onMounted, ref } from "vue";
import { useThemeLocaleData } from "../composables";
import { usePageFrontmatter } from "@vuepress/client";
import { DefaultThemePageFrontmatter } from "../../shared";

const themeLocale = useThemeLocaleData();
const frontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();
const navbarRef = ref();
const linksWrapMaxWidth = ref();
const focused = ref(false);
const  css = (el, property) => {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
onMounted(() => {
  const MOBILE_DESKTOP_BREAKPOINT = 719;
  const NAVBAR_VERTICAL_PADDING = parseInt(css(navbarRef.value, 'paddingLeft')) + parseInt(css(navbarRef.value, 'paddingRight'));
  const handleLinksWrapWidth = () => {
    // TODO: 这个是还没有完成的吧
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        linksWrapMaxWidth.value = null
      } else {
        linksWrapMaxWidth.value = navbarRef.value.offsetWidth - NAVBAR_VERTICAL_PADDING
          // - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)

    window.addEventListener('scroll',() => {
      if(window.pageYOffset > 0) {
        navbarRef.value.classList.add('fixed')
      } else {
        navbarRef.value.classList.remove('fixed')
      }
    })
})

const handleShowSuggestions = () => {}
// import SvgRouter from './logo.svg';
</script>
<template>
  <header class="navbar" ref="navbarRef">
    <SidebarButton></SidebarButton>
    <router-link to="/" class="home-link">
      <svg
        class="logo-nav"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 220.000000 58.000000"
        preserveAspectRatio="xMidYMid meet"
        color-interpolation-filters="sRGB"
        style="margin: auto"
      >
        <g
          data-v-2cb57da0=""
          fill="#fa5d89"
          class="iconlinesvg-g iconlinesvg"
          
          
        >
          <g class="tp-name">
            <g transform="translate(0, 0)">
              <g data-gra="path-name" fill="#fa5d89" transform="scale(1)">
                <path
                  d="M20.88-13.82L20.88-13.82L16.36-14.67Q1.97-17.21 2.54-26.52L2.54-26.52Q3.10-38.37 21.44-38.65L21.44-38.65Q38.93-38.09 39.50-30.47L39.50-30.47Q38.93-26.24 34.70-25.96L34.70-25.96Q32.16-25.96 29.06-27.93L29.06-27.93Q24.83-30.47 21.16-30.47L21.16-30.47Q16.93-30.47 16.93-27.93L16.93-27.93Q16.08-25.67 21.44-24.83L21.44-24.83L27.93-23.42Q40.91-20.60 40.91-12.13L40.91-12.13Q40.34 0 20.60 0.28L20.60 0.28Q2.54 0 2.26-8.18L2.26-8.18Q2.54-12.13 7.62-12.70L7.62-12.70Q9.31-12.70 12.41-10.44L12.41-10.44Q16.65-7.34 20.88-7.34L20.88-7.34Q25.39-7.34 25.67-10.16L25.67-10.16Q25.67-12.70 20.88-13.82Z"
                  transform="translate(-2.25705329153605, 53.040752351097176)"
                ></path>
              </g>
            </g>
            <g transform="translate(42, 2.9623824451410705)">
              <g>
                <g class="imagesvg">
                  <g>
                    <rect
                      fill="#fa5d89"
                      fill-opacity="0"
                      stroke-width="2"
                      x="0"
                      y="0"
                      width="47.39811912225704"
                      height="47.39811912225704"
                      class="image-rect"
                    ></rect>
                    <svg
                      x="0"
                      y="0"
                      width="47.39811912225704"
                      height="47.39811912225704"
                      filtersec="colorsb1002727604"
                      class="image-svg-svg primary"
                      style="overflow: visible"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0.6650000214576721 0.6650000214576721 98.46299743652344 98.46299743652344"
                      >
                        <path
                          fill="#488b81"
                          d="M49.896.665L.665 99.128h98.463L49.896.665zm19.541 57.436H30.356l19.54-39.089 19.541 39.089zM26.25 66.305h47.293l12.31 24.612H13.94l12.31-24.612z"
                        ></path>
                      </svg>
                    </svg>
                    <!---->
                  </g>
                </g>
              </g>
            </g>
            <g transform="translate(93, 0)">
              <g data-gra="path-name" fill="#fa5d89" transform="scale(1)">
                <path
                  d="M3.95-6.21L3.95-6.21L3.95-45.42Q3.95-53.04 11.29-53.04L11.29-53.04Q18.06-53.04 18.34-45.42L18.34-45.42L18.34-33.01L18.62-33.01Q21.72-38.37 29.06-38.65L29.06-38.65Q43.73-37.81 45.42-18.90L45.42-18.90Q44.58 0 28.50 0.28L28.50 0.28Q19.18 0 17.21-5.92L17.21-5.92Q16.93 0 10.72 0.28L10.72 0.28Q3.67 0.28 3.95-6.21ZM18.06-18.90L18.06-18.90Q18.06-9.87 24.26-9.87L24.26-9.87Q30.47-9.87 30.75-18.62L30.75-18.62Q30.47-26.80 23.98-27.08L23.98-27.08Q18.06-26.52 18.06-18.90Z"
                  transform="translate(-3.9498432601880875, 53.040752351097176)"
                ></path>
              </g>
            </g>
            <g transform="translate(138, 0)">
              <g data-gra="path-name" fill="#fa5d89" transform="scale(1)">
                <path
                  d="M38.93-15.52L38.93-15.52L17.77-15.52Q18.34-7.62 25.67-7.62L25.67-7.62Q28.21-7.62 32.73-10.16L32.73-10.16Q36.68-12.41 38.93-12.41L38.93-12.41Q42.88-11.85 43.45-7.34L43.45-7.34Q42.60 0 23.98 0.28L23.98 0.28Q3.10 0 2.82-18.90L2.82-18.90Q3.39-37.81 23.98-38.65L23.98-38.65Q43.17-37.81 45.71-21.72L45.71-21.72Q45.71-15.24 38.93-15.52ZM17.77-22.85L17.77-22.85L31.60-22.85Q31.32-29.62 24.83-29.91L24.83-29.91Q18.06-29.62 17.77-22.85Z"
                  transform="translate(-2.8213166144200623, 53.040752351097176)"
                ></path>
              </g>
            </g>
            <g transform="translate(184, 0)">
              <g data-gra="path-name" fill="#fa5d89" transform="scale(1)">
                <path
                  d="M3.67-6.49L3.67-6.49L3.67-31.32Q3.67-38.09 10.44-38.65L10.44-38.65Q16.65-38.37 16.93-31.03L16.93-31.03L16.93-28.21L17.21-28.21Q20.88-38.65 26.80-38.65L26.80-38.65Q32.45-38.37 33.01-31.88L33.01-31.88Q32.73-26.52 28.78-25.11L28.78-25.11L24.83-24.26Q18.06-22.85 18.62-16.65L18.62-16.65L18.62-6.49Q18.34 0 11.00 0.28L11.00 0.28Q3.67 0 3.67-6.49Z"
                  transform="translate(-3.6677115987460813, 53.040752351097176)"
                ></path>
              </g>
            </g>
          </g>
          <!---->
        </g>
      </svg>
      <!-- <svg
        class="logo-nav"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 401.69 98.4"
      >
        <g id="Capa_2" data-name="Capa 2">
          <g id="Capa_1-2" data-name="Capa 1">
            <path
              d="M105.79,27.23h12.78l16.12,44.65L150.9,27.23h12.77L141.48,85.56h-13.4Z"
            />
            <path
              d="M168.29,82.12Q164,77.77,164,69.53V42.63h12.23V69.26q0,4.26,2,6.25c1.36,1.33,3.45,2,6.29,2a13.73,13.73,0,0,0,5.75-1.22A16,16,0,0,0,195,73.06V42.63h12.22V85.56H195.91l-.45-4.08a23.47,23.47,0,0,1-15.12,5Q172.54,86.47,168.29,82.12Z"
            />
            <path
              d="M222.22,80.8q-6.37-5.65-6.38-16.8,0-10.5,5.57-16.39t16.26-5.89q9.78,0,15.17,5.12t5.39,13.72v7.79H227.16c.6,3.32,2.13,5.65,4.57,7s6.06,2,10.83,2a39.59,39.59,0,0,0,7-.64,31.7,31.7,0,0,0,6.11-1.63v8.7q-6,2.72-15.67,2.72Q228.61,86.47,222.22,80.8Zm25.32-20V58.48q0-8-9.51-8c-4,0-6.79.8-8.42,2.4s-2.45,4.24-2.45,7.92Z"
            />
            <path
              d="M272.81,85.83a31.36,31.36,0,0,1-7.07-1.72V74a31.67,31.67,0,0,0,7,1.94,44,44,0,0,0,7.52.68,23.39,23.39,0,0,0,6.47-.59,2.33,2.33,0,0,0,1.77-2.4,2.8,2.8,0,0,0-1.63-2.53,39.68,39.68,0,0,0-6.25-2.36c-.91-.24-2.06-.6-3.44-1.08q-6.35-2.09-9.29-5c-2-1.93-2.94-4.64-2.94-8.15q0-6.24,4.57-9.51t14.36-3.26a47.58,47.58,0,0,1,7.29.55,34.85,34.85,0,0,1,6.2,1.45V53.77a24.42,24.42,0,0,0-5.52-1.72,30.87,30.87,0,0,0-6-.64,25.74,25.74,0,0,0-6.43.59c-1.39.4-2.08,1.17-2.08,2.31a2.47,2.47,0,0,0,1.49,2.31,38.75,38.75,0,0,0,5.75,2l3,.91A34.78,34.78,0,0,1,295.63,63a10.69,10.69,0,0,1,4,4.21,13.91,13.91,0,0,1,1.23,6.25q0,6.43-4.8,9.74t-14.22,3.31A63,63,0,0,1,272.81,85.83Z"
            />
            <path
              d="M312,83q-4.39-3.49-4.39-9.83A12.49,12.49,0,0,1,312.16,63q4.57-3.75,13.18-3.76H338V58a8.13,8.13,0,0,0-.95-4.26,5.63,5.63,0,0,0-3.35-2.26,24.6,24.6,0,0,0-6.84-.73A44.66,44.66,0,0,0,312.75,53v-8.6a36,36,0,0,1,7.47-2,55.67,55.67,0,0,1,9.19-.73q20.29,0,20.29,16.58V85.56H339.11l-.64-3.89q-5.25,4.8-15.58,4.8A17,17,0,0,1,312,83Zm21.19-5.89A12.69,12.69,0,0,0,338,73.6V66.81H325.61q-7.16,0-7.15,5.89,0,5.7,7.78,5.7A17.2,17.2,0,0,0,333.17,77.09Z"
            />
            <path
              d="M372,63.73l-15.85-21.1h13.23l9.24,12.5,9.23-12.5h13.23L385.3,63.73l16.39,21.83H388.38L378.6,72.43l-9.79,13.13H355.5Z"
            />
            <polygon
              points="92.25 8.05 75.25 8.05 46.14 53.12 17.04 8.05 0.04 8.05 46.15 79.45 92.25 8.05"
            />
            <polygon
              points="46.15 87.39 7.11 26.94 0 26.94 46.14 98.4 92.29 26.94 85.18 26.94 46.15 87.39"
            />
            <polygon
              points="70.34 1.37 46.14 38.17 21.95 1.37 39.75 5.87 39.75 0 52.54 0 52.54 5.87 70.34 1.37"
            />
          </g>
        </g>
      </svg> -->
    </router-link>
    <div class="links" :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}">
      <NavLinks class="can-hide" />
    </div>
    <div :class="{'remove-links': focused}" class="external-links-search">
      <!-- <a title="Previous Version" class="v-old" target="_blank"> v3.x </a> -->
      <div class="con-links">
        <a
          title="Github"
          target="_blank"
          href="https://github.com/Saber-Kurama/vuepress-saber-fe"
        >
          <i class="bx bxl-github"></i>
        </a>
        <!-- <a title="Twitter" target="_blank" href="https://twitter.com/vuesax">
          <i class="bx bxl-twitter"></i>
        </a>
        <a title="Discord" target="_blank" href="https://discord.gg/6AZNXEa">
          <i class="bx bxl-discord"></i>
        </a> -->
      </div>
      <!-- v-if="themeLocale.value.search !== false && frontmatter?.search !== false" -->
      <SearchBox
        @focus="focused = true"
        @blur="focused = false"
        @showSuggestions="handleShowSuggestions"
        />
       <div class="user-info"></div>
    </div>
  </header>
</template>
<style lang="scss">
@import "../styles/variables";
$navbar-vertical-padding: 0.7rem;
$navbar-horizontal-padding: 1.5rem;
.user-info {
  position: relative;
  margin-left: 10px;
  .user-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
    &:hover {
      .dropdown {
        opacity: 1;
        visibility: visible;
      }
    }
    .dropdown {
      width: 160px;
      visibility: hidden;
      opacity: 0;
      position: absolute;
      right: 10px;
      bottom: 0px;
      transform: translate(0, 100%);
      box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.15);
      transition: all 0.25s ease;
      .dropdown-content {
        width: 160px;
        border-radius: 15px 5px 15px 15px;
        padding: 10px;
        background: var(--vs-theme-layout);
        margin-top: 15px;
        position: relative;
      }
      .name-user {
        border-bottom: 1px solid var(--vs-theme-bg2);
        margin-bottom: 10px;
        width: 100%;
        padding: 5px 10px;
        padding-top: 0px;
        font-size: 0.8rem;
        text-align: center;
      }
      .logout {
        background: var(--vs-theme-color);
        color: var(--vs-theme-layout);
        border: 0px;
        padding: 8px 25px;
        border-radius: 10px;
        transition: all 0.25s ease;
        box-shadow: 0px 0px 0px 0px var(--vs-theme-color);
        width: 100%;

        &:hover {
          box-shadow: 0px 5px 15px -5px var(--vs-theme-color);
          transform: translate(0, -4px);
        }
      }
    }
    .user {
      img {
        width: 40px;
        border-radius: 30%;
      }
    }
  }
  .btn-login {
    background: var(--vs-theme-color);
    color: var(--vs-theme-layout);
    border: 0px;
    padding: 10px 15px;
    border-radius: 10px 10px 20px 10px;
    margin-right: 10px;
    padding-right: 17px;
    transition: all 0.25s ease;
    box-shadow: 0px 0px 0px 0px var(--vs-theme-color);
    &:hover {
      box-shadow: 0px 5px 15px -5px var(--vs-theme-color);
      transform: translate(0, -4px);
    }
  }
}
.logo-nav {
  fill: var(--vs-theme-color);
  height: 28px;
}
.home-link {
  position: absolute;
  left: 0px;
  font-weight: bold;
  padding-left: 30px;
}
.v-old {
  padding: 10px;
  color: inherit;
  opacity: 0.5;
  transition: all 0.25s ease;
  &:hover {
    opacity: 1;
  }
}

.external-links-search {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  &.remove-links {
    // width calc(100% - 60px)
    .con-links,
    .v-old {
      display: none;
    }
  }
  .con-links {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    a {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      box-sizing: border-box;
      box-icon {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
}
.navbar {
  // padding $navbar-vertical-padding $navbar-horizontal-padding
  padding: 0px 20px;
  // line-height $navbarHeight - 1.4rem
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 0px 30px 0px;
  transition: all 0.25s ease;
  &.transparent {
    background: transparent;
  }
  &.fixed {
    border-radius: 0px;
    background: var(--vs-theme-layout);
    .btn-login {
      border-radius: 10px;
    }
    // backdrop-filter blur(20px)
    // background rgba(255,255,255,0.6) !important
  }
  a,
  span,
  img {
    display: inline-block;
  }
  .logo {
    height: $navbarHeight - 1.4rem;
    min-width: $navbarHeight - 1.4rem;
    margin-right: 0.8rem;
    vertical-align: top;
  }
  .site-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--vs-theme-color);
    position: relative;
  }
  .links {
    box-sizing: border-box;
    white-space: nowrap;
    font-size: 0.9rem;
    // right $navbar-horizontal-padding
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    // left 50%
    // transform translate(-50%)
    .search-box {
      flex: 0 0 auto;
      vertical-align: top;
    }
  }
}
@media (max-width: 1500px) {
  .navbar {
    justify-content: flex-start;
  }
  .home-link {
    position: relative;
    padding-left: 0px;
    padding-right: 20px;
  }
}
@media (max-width: 1000px) {
  .navbar {
    padding: 9px;
    padding-top: 8px;
    padding-left: 2.5rem;
    display: flex;
    justify-content: space-between;
    .home-link {
      position: relative;
      padding-left: 0px;
      margin-left: 25px;
    }
    .external-links-search {
      position: relative;
      padding-left: 0px;
      right: 0px;
    }
    .can-hide {
      display: none;
    }
    .links {
      padding-left: 1.5rem;
      display: none;
    }
  }
}

@media (max-width: 500px) {
  .home-link {
    width: 24px !important;
    overflow: hidden;
    padding: 0px;
    margin-top: 3px;
    .logo-nav {
      height: 24px;
    }
  }
  .user-info {
    .btn-login {
      margin-right: 0px;
    }
  }
}
@media (max-width: 390px) {
  .external-links-search {
    .con-links {
      display: none;
    }
  }
}
</style>
