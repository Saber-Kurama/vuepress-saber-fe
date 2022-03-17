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
  // {
  //   name: "Adobe XD",
  //   link: "https://www.adobe.com/es/products/xd.html",
  //   img: "/use/adobe-xd-1.svg",
  // },
  // {
  //   name: "Webpack",
  //   link: "https://webpack.js.org/",
  //   img: "/use/webpack-vuesax-13.png",
  //   img2: "/use/webpack-vuesax-12.png",
  // },
  // {
  //   name: "Illustrator",
  //   link: "https://www.adobe.com/products/illustrator.html",
  //   img: "/use/illustrator-vuesax-11.png",
  // },
]);
watch(translatex, () => {
  if (translatex.value > 100) {
    notScrolling.value = true;
  } else {
    notScrolling.value = false;
  }
});
onMounted(() => {
  smooth();
  document.addEventListener("keydown", keydownx);
});
const smooth = () => {
  const element: HTMLDivElement = document.querySelector(
      ".con-projects-ul-uses"
    ),
    speed = 0.08;

  let raf;

  let offset = 0;

  function smoothScroll() {
    let leftx = translatex.value;
    offset += (leftx - offset) * speed;

    let scroll = "translateX(-" + offset + "px) translateZ(0)";
    element.style.transform = scroll;

    raf = requestAnimationFrame(smoothScroll);
  }
  smoothScroll();
};
const mouseleaveUl = () => {
  mousex.value = 0;
  notPulse.value = true;
  setTimeout(() => {
    moving.value = false;
  }, 50);
};
const mousemovex = (e) => {
  if (notPulse.value) {
    return;
  }
  // }, 10)
  const element: HTMLDivElement = e.target.closest(".con-projects-ul-uses");
  const parent = element.parentNode as HTMLDivElement;
  let move;
  if (e.type == "touchmove") {
    move = mousex.value - (e.targetTouches[0].clientX - 200);
  } else {
    move = mousex.value - (e.clientX - 200);
  }
  if (move > 40 || move < -40) {
    moving.value = true;
  }
  if (move > 50) {
    translatex.value -= -80;
    if (translatex.value > element.clientWidth - parent.clientWidth) {
      translatex.value = element.clientWidth - parent.clientWidth;
    }
    // element.style.transform = `translate(-${translatex}px)`
    if (e.type == "touchmove") {
      mousex.value = e.targetTouches[0].clientX - 200;
    } else {
      mousex.value = e.clientX - 200;
    }
  } else if (move < -50) {
    translatex.value -= 80;
    if (translatex.value < 0) {
      translatex.value = 0;
    }
    // element.style.transform = `translate(-${translatex}px)`
    if (e.type == "touchmove") {
      mousex.value = e.targetTouches[0].clientX - 200;
    } else {
      mousex.value = e.clientX - 200;
    }
  }
};
const mouseupx = (e) => {
  e.preventDefault();
  const element = e.target.closest(".con-projects-ul-uses");
  const parent = element.parentNode;
  // if(e.type=='touchend'){
  //   // translatex -= -mousex + (e.targetTouches[0].clientX - 200)
  // } else {
  //   // translatex -= -mousex + (e.clientX - 200)
  // }

  if (translatex.value < 0) {
    translatex.value = 0;
  }

  if (translatex.value > element.clientWidth - parent.clientWidth) {
    translatex.value = element.clientWidth - parent.clientWidth;
  }

  // element.style.transform = `translate(-${translatex}px)`
  mousex.value = 0;
  notPulse.value = true;
  setTimeout(() => {
    moving.value = false;
  }, 1);
};
const mousedownx = (e) => {
  e.preventDefault();
  setTimeout(() => {
    notPulse.value = false;
  }, 20);
  if (e.type == "touchstart") {
    mousex.value = e.targetTouches[0].clientX - 200;
  } else {
    mousex.value = e.clientX - 200;
  }
};
const keydownx = (evt) => {
  let keyx = evt.key;
  const element = document.querySelector(".con-projects-ul-uses");
  const parent = document.querySelector(".con-projects");

  if (keyx == "ArrowRight") {
    translatex.value -= -300;
    if (translatex.value > element.clientWidth - parent.clientWidth) {
      translatex.value = element.clientWidth - parent.clientWidth;
    }
  } else if (keyx == "ArrowLeft") {
    translatex.value -= 300;
    if (translatex.value < 0) {
      translatex.value = 0;
    }
  }
};
const scrollH = (e) => {
  scrolling.value = true;
  let _this = this;
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  const element = e.target.closest(".con-projects-ul-uses");
  const parent = element.parentNode;
  // console.dir(element)
  if (delta == 1 && translatex.value > 0) {
    translatex.value -= 250;
    if (translatex.value < 0) {
      translatex.value = 0;
    }
  } else if (
    delta == -1 &&
    translatex.value < element.clientWidth - parent.clientWidth
  ) {
    translatex.value += 250;
    if (translatex.value > element.clientWidth - parent.clientWidth) {
      translatex.value = element.clientWidth - parent.clientWidth;
    }
  }
};
</script>
<template>
  <div class="con-twits">
    <header>
      <h2>
        使用社区最受欢迎的框架和库，加速<b>现代 Web 应用</b>的开发与构建<br />
        得益于 JavaScript 繁荣的生态和社区，让我们可以构建和维护复杂的 Web
        应用程序
      </h2>
    </header>

    <ul
      @mousedown="mousedownx"
      @mousemove="mousemovex"
      @mouseleave="mouseleaveUl"
      @mouseup="mouseupx"
      class="con-projects-ul-uses"
    >
      <!-- @mousewheel="scrollH" -->
      <li v-for="(item, index) in twits" :key="index">
        <div class="con-img-t">
          <img :class="{ 'not-darken': item.img2 }" :src="item.img" alt="" />
          <img v-if="item.img2" class="has-darken" :src="item.img2" alt="" />
          <img
            v-if="!item.notShadow"
            class="filter"
            :class="{ 'not-darken': item.img2 }"
            :src="item.img"
            alt=""
          />
          <img
            v-if="item.img2"
            class="filter"
            :class="{ 'has-darken': item.img2 }"
            :src="item.img2"
            alt=""
          />
        </div>
        <p v-html="item.name" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
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
        .con-img-t {
          background: getVar(theme-bg);
        }
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
      width: auto;
      list-style-type: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      border-radius: 40px;
      padding: 0px;
      padding-top: 0px;
      transition: all 0.25s ease;
      margin: 25px;
      p {
        font-weight: bold;
      }
      .con-img-t {
        width: 140px;
        height: 140px;
        position: relative;
        transition: all 0.3s ease;
        box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.05);
        border-radius: 25px;
        box-sizing: border-box;
        background: getVar(theme-layout);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        width: auto;
        z-index: 100;
        position: relative;

        max-height: 70px;
        max-width: 90%;
        &.filter {
          z-index: 50;
          position: absolute;
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
    .con-projects-ul-uses {
      overflow: auto;
      width: 100%;
      li {
        position: relative;
      }
      &::-webkit-scrollbar {
        height: 0px;
      }
    }
  }
}
</style>
