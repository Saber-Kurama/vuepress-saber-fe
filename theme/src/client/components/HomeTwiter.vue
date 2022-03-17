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
// TODO: 最好根据 数据传递
const twits = ref([
  {
    name: "saber",
    user: "saber",
    link: "https://twitter.com/Atinux",
    text: "一句描述",
    img: "http://image.parligerly.com/avatar/20200327143435_MU8s5.jpeg",
  },
  {
    name: "陈关印",
    user: "陈关印",
    link: "https://twitter.com/PaurakhSharma",
    text: "一句描述",
    img: "http://image.parligerly.com/avatar/guan.jpeg",
  },
  {
    name: "张凯",
    user: "张凯",
    link: "_",
    text: "一句描述",
    img: "http://image.parligerly.com/avatar/20160826160524_kYLGa.jpeg",
  },
  {
    name: "李国岩",
    user: "李国岩",
    link: "",
    text: "一句描述",
    img: "http://image.parligerly.com/avatar/20170621170536_dKenf.png",
  }
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
      ".con-projects-ul"
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
  const element: HTMLDivElement = e.target.closest(".con-projects-ul");
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
  const element = e.target.closest(".con-projects-ul");
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
  const element = document.querySelector(".con-projects-ul");
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
  const element = e.target.closest(".con-projects-ul");
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
}  
</script>
<template>
  <div class="con-twits">
    <header>
      <h2>
        基于领域模型与团队实践共同打造<b>一站式开发平台</b>，全面提升研发与管理效率<br>
        适用于多种业务场景，让优秀的团队更优秀
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
