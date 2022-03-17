<script lang="ts" setup>
import { usePageFrontmatter, useSiteLocaleData } from "@vuepress/client";
import { computed, ref } from "vue";
import type { DefaultThemePageFrontmatter } from "../../shared";
import NavLink from "./NavLink.vue";
import Components from "./HomeComponents.vue";
import Patrons from "./HomePatrons.vue";
import Illustration1 from "./HomeIllustration1.vue";
import Illustration2 from "./HomeIllustration2.vue";
import Illustration3 from "./HomeIllustration3.vue";
import Illustration4 from "./HomeIllustration4.vue";
import Uses from "./HomeUses.vue";
import Twitter from "./HomeTwiter.vue";
import PremiumThemes from "./PremiumThemes.vue";
import Footer from "./Footer.vue";

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
// 获取星
// mounted(){
//    fetch('https://api.github.com/repos/lusaxweb/vuesax')
//   .then(response => response.json())
//   .then(json => {
//     this.star = json.stargazers_count
//   })
// },
const icons = {
  github,
  vuesax,
  discord,
};
const time = (name) => {
  expand.value = false;
  icons[name].value = false;
};
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
            <NavLink
              @mouseleave.native="time('vuesax')"
              @mouseenter.native="(vuesax = true), (expand = true)"
              title="Get Started"
              class="action-button"
              :item="actionLink"
            />

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
      <Components
        :class="{
          'github-hover': github,
          'discord-hover': discord,
          'vuesax-hover': vuesax,
          'btn-hover': expand,
        }"
      />
    </div>
    <!-- 顾客 -->
    <!-- <Patrons /> -->
    <Illustration1 :data="frontmatter.features[0] || []" />
    <Illustration2 :data="frontmatter.features[1] || []" />
    <Uses />
    <Illustration3 :data="frontmatter.features[2] || []" />
    <Illustration4 :data="frontmatter.features[3] || []" />
    <Twitter />
    <PremiumThemes :data="frontmatter.premiumThemes || {}" />
    <!-- <div
      class="features"
      v-if="data.features && data.features.length"
    >
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <Content class="custom"/> -->

    <!-- <div
      class="footer"
      v-if="data.footer"
    >
      {{ data.footer }}
    </div> -->
    <Footer :data="frontmatter.value?.suscribe" />
  </main>
</template>
<style lang="scss">
@import "../styles/variables";

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
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
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
      margin-block-end: 1em;
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
@media (max-width: $MQMobile) {
  .home {
    .features {
      flex-direction: column;
    }
    .feature {
      max-width: 100%;
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home {
    .hero {
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }
      h1 {
        font-size: 2rem;
      }
      h1,
      .description,
      .action {
        margin: 1.2rem auto;
      }
      .description {
        font-size: 1.2rem;
      }
      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .feature {
      h2 {
        font-size: 1.25rem;
      }
    }
  }
}

@media (max-width: 1400px) {
  .home {
    .content-i {
      padding: 100px 30px;
      .con-text {
        padding-left: 0px;
      }
      .con-ilus {
        height: auto;
        padding-right: 20px;
        width: 50%;
        svg {
          height: auto;
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 1150px) {
  .home {
    .hero {
      width: 60%;
      justify-content: flex-start;
      .content-hero {
        padding: 20px;
        padding-right: 30px;
        .description {
          font-size: 0.95rem;
        }
        #main-title {
          font-size: 2rem !important;
        }
      }
    }
  }
}
@media (max-width: 1000px) {
  .home {
    .content-i {
      .con-text {
        h2 {
          font-size: 1.5rem;
        }
        p {
          font-size: 0.9rem;
        }
        .btn-action {
          padding: 7px 15px;
          font-size: 0.9rem;
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .home {
    .hero {
      width: 100%;
      align-items: center;
      .content-hero {
        width: 100%;
        align-items: center;
        padding-top: 0px;
        #main-title {
          margin-top: 0px;
          text-align: center;
        }
      }
    }
  }
}
@media (max-width: 800px) {
  .home {
    .content-i {
      position: relative;
      justify-content: flex-start;
      .con-text {
        width: 60%;
        z-index: 300;
      }
      .con-ilus {
        position: absolute;
        width: 50%;
        top: 40px;
        right: 0px;
      }
    }
  }
}

@media (max-width: 670px) {
  .home {
    min-height: auto;
    .content-i {
      position: relative;
      justify-content: flex-start;
      padding: 40px 20px;
      flex-direction: column;
      .con-text {
        width: 90%;
        z-index: 300;
      }
      .con-ilus {
        position: relative;
        width: 100%;
        max-width: none;
        opacity: 1;
        order: -1;
        top: 0px;
        padding: 10px !important;
      }
    }
  }
}
@media (max-width: 550px) {
  .init {
    min-height: auto;
  }
  .home {
    .hero {
      z-index: 120;
      .circle-init {
        display: none;
      }
      .points-init {
        z-index: -1;
      }
      .description {
        text-align: center;
      }
    }
  }
}
@media (max-width: 500px) {
  .home {
    .content-i {
      .con-text {
        width: 100%;
        h2 {
          font-size: 1.2rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
}
@media (max-width: 470px) {
  .home {
    .hero {
      padding: 10px;
      .content-hero {
        z-index: 1000;
        padding-right: 15px !important;
        #main-title {
          font-size: 1.8rem !important;
        }
      }
    }
  }
  .con-btns {
    flex-wrap: wrap;
    width: 100%;
    a {
      width: calc(50% - 20px);
      margin: 10px;
      text-align: center;
      &:first-child {
        width: calc(100% - 30px);
      }
    }
  }
}
</style>
