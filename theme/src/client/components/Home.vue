<script lang="ts" setup></script>
<template>
  <main class="home" aria-labelledby="main-title">
    <div class="init">
      <header class="hero">
        <div class="points-init">
          <span v-for="span in 16" :key="span"></span>
        </div>
      </header>
    </div>
  </main>
</template>
<style lang="scss">
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
.home {
  margin: 0px auto;
  display: block;
  width: 100%;
  overflow: hidden;
  background: var(--vs-theme-layout);
}
</style>
