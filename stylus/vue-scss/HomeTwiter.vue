<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";

const leftx = ref(0);
const notPulse = ref(true);
const translatex = ref(0);
const scrolling = ref(false);
const drag = ref(false);
const activeView = ref(false);
const active = ref(0);
const delta = ref(0);
const mousex = ref(0);
const change = ref(0);
const moving = ref(false);
const notScrolling = ref(false);
const twits = ref([
  {
    name: "Vuejs",
    link: "https://vuejs.org/",
    img: "/use/vuejs-vuesax-1.png",
  },
  {
    name: "Javascript",
    link: null,
    img: "/use/js-javaScript-vuesax.png",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    img: "/use/typescript-vuesax.png",
  },
  {
    name: "Sass",
    link: "https://sass-lang.com/",
    img: "/use/sass-vuesax-4.png",
  },
  {
    name: "Vuepress",
    link: "https://vuepress.vuejs.org/",
    img: "/use/vuepress-vuesax-5.png",
  },
  {
    name: "Babel",
    link: "https://babeljs.io/",
    img: "/use/babel-vuesax-6.png",
  },
  {
    name: "Jest",
    link: "https://jestjs.io/",
    img: "/use/jest-vuesax-8-w.svg",
    img2: "/use/jest-vuesax-8.svg",
    notShadow: true,
  },
  {
    name: "Boxicons",
    link: "https://boxicons.com/",
    img: "/use/boxicons-vuesax-10.png",
    img2: "/use/boxicons-vuesax-9.png",
  },
  {
    name: "Adobe XD",
    link: "https://www.adobe.com/es/products/xd.html",
    img: "/use/adobe-xd-1.svg",
  },
  {
    name: "Webpack",
    link: "https://webpack.js.org/",
    img: "/use/webpack-vuesax-13.png",
    img2: "/use/webpack-vuesax-12.png",
  },
  {
    name: "Illustrator",
    link: "https://www.adobe.com/products/illustrator.html",
    img: "/use/illustrator-vuesax-11.png",
  },
]);
</script>
<template>
  <div class="con-twits">
    <header>
      <h2>
        <span>Some Words validating</span> <b>Vuesax</b>
        <span>are oxygen for us Thanks!</span>
      </h2>
    </header>

    <ul
      @mousedown="mousedownx"
      @mousemove="mousemovex"
      @mouseleave="mouseleaveUl"
      @mouseup="mouseupx"
      class="con-projects-ul"
    >
      <!-- @mousewheel="scrollH" -->
      <li v-for="(item, index) in twits" :key="index">
        <div class="con-img-t">
          <img :src="item.img" alt="" />
          <img class="filter" :src="item.img" alt="" />
        </div>
        <h5>
          <a target="_blank" :href="item.link">
            {{ item.user }}
          </a>
        </h5>
        <p v-html="item.text" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@function getColor($colorx, $alpha: 1) {
  @return unquote("rgba(var(--vs-" + $colorx + "), " + $alpha + ")");
}
@function getVar($var) {
  @return unquote("var(--vs-" + $var + ")");
}
.darken {
  .con-twits {
    ul {
      li {
        background: getVar(theme-bg);
        .filter {
          opacity: 0.2;
        }
      }
    }
  }
}
.con-twits {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  margin-top: 150px;
  margin-bottom: 70px;
  header {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0px;
    h2 {
      font-size: 1.2rem;
      font-weight: normal;
      border: 0px;
      padding: 0px;
      margin: 0px;
      padding: 50px;
      span {
        opacity: 0.6;
      }
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 100px;
    padding-top: 130px;
    li {
      width: 320px;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.05);
      border-radius: 40px;
      padding: 20px;
      padding-top: 0px;
      transition: all 0.25s ease;
      margin: 20px;
      &:hover {
        background: getColor("primary");
        box-shadow: 0px 10px 30px -5px getColor("primary", 0.4);
        transform: translate(0, -10px);
        color: #fff;
        h5 {
          a {
            color: #fff !important;
          }
        }
        .con-img-t {
          transform: translate(0, -5px);
        }
        p {
          opacity: 1;
        }
      }
      h5 {
        margin: 0px;
        margin-top: 12px;
        a {
          font-weight: bold;
        }
      }
      p {
        opacity: 0.7;
        font-size: 0.8rem;
        text-align: center;
      }
      .con-img-t {
        width: 90px;
        position: relative;
        transition: all 0.3s ease;
      }
      img {
        width: 100%;
        border-radius: 35%;
        margin-top: -40px;
        z-index: 100;
        position: relative;
        &.filter {
          z-index: 50;
          position: absolute;
          left: 0px;
          top: 10px;
          opacity: 0.35;
          filter: blur(12px);
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .con-twits {
    margin-top: 50px;
    margin-bottom: 0px;
    ul {
      padding: 50px 20px;
      padding-top: 100px;
    }
    header {
      h2 {
        padding: 10px;
      }
    }
    .con-projects-ul {
      overflow: auto;
      width: 100%;
      li {
        position: relative;
        min-width: 320px;
      }
      &::-webkit-scrollbar {
        height: 0px;
      }
    }
  }
}
</style>
