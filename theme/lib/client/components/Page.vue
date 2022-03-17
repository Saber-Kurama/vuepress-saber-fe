<script setup lang="ts">
import { Content } from "@vuepress/client";
</script>

<template>
  <main ref="page" class="page">
    <transition name="fade">
      <Content />
    </transition>
  </main>
</template>
<style lang="scss">
@import "../styles/variables";
@import "../styles/wrapper";
@function getVar($var) {
  @return unquote("var(--vs-" + $var + ")");
}
.back-link {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 600;
  margin: 15px;
  display: block;
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
  border-radius: 25px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  padding-top: 8px;
  padding-left: 8px;
  &:hover {
    background: getVar(theme-layout);
    box-shadow: 0px 6px 10px -5px rgba(0, 0, 0, 0.1);
    transform: translate(0, -3px);
  }
  i {
    font-size: 1.4rem;
  }
}

@media (max-width: 1240px) {
  .back-link {
    display: none;
  }
}
.con-svg {
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.up {
  position: fixed;
  bottom: 0px;
  right: 150px;
  width: 40px;
  height: 40px;
  background: getVar(theme-layout);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border-radius: 12px;
  cursor: pointer;
  margin: 20px;

  transform: translate(0, calc(100% + 20px));
  transition: all 0.25s ease, bottom 0s;
  z-index: 500;
  &:active {
    transform: scale(0.9) translate(0) !important;
    opacity: 0.7;
  }
  &:hover {
    color: $accentColor;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
  }
  &.active {
    transform: translate(0);
  }
}
.header-page {
  width: 100%;
  position: absolute;
  background: getVar(theme-bg2);
  height: auto;
  border-radius: 0px 0px 0px 30px;
  transition: background 0.25s ease, border-radius 0.25s ease;
  top: 0px;
  &:before {
    position: absolute;
    top: -59px;
    left: 0px;
    content: "";
    background: getVar(theme-bg2);
    width: 100%;
    height: 60px;
  }
  &.fixed {
    position: fixed;
    top: 57px;
    z-index: 9999;
    border-radius: 0px;
    background: getVar(theme-bg);
    margin: 0px;
    .back-link {
      margin: 10px 15px;
    }
    .header__content {
      height: 58px;
      &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%);
        width: 110%;
        height: 100%;
        z-index: -1;
        box-shadow: 0px 25px 20px -25px rgba(0, 0, 0, 0.1);
      }
    }
    .header-effect {
      opacity: 0;
    }
  }
  table {
    margin: 0px;
    width: calc(100% - 20px);
    margin: 0px 10px;
    display: table;
    tr {
      width: 100%;
      border: 0px !important;
      th {
        font-size: 0.8rem;
        font-weight: normal;

        border: 0px !important;
        padding: 8px 0px;
      }
    }
  }
  .header__content {
    @extend .wrapper;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 200px;
    padding-top: 0px;
    padding-bottom: 0px;

    background: transparent;
    padding: 0px 40px !important;
    &.con-table {
      height: auto !important;
    }
    .flex-header {
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 70px;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%);
      width: 0%;
      height: 100%;

      z-index: -1;
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.25s ease;
    }
    h1 {
      font-size: 35px;
      margin: 0px;
      padding: 13px 0px;

      padding-bottom: 15px;
      font-weight: 600;
    }
    .interactive-links {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      padding-bottom: 13px;
      margin: 0px;
      .divider {
        position: relative;
        width: 1px;
        height: 25px;
        background: getVar(theme-color);
        margin: 0px 10px;
      }
      li {
        button {
          border: 0px;
          padding: 0px;
          position: relative;
          background: transparent;
          padding: 0px;
          margin: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          color: getVar(theme-color);
          &:hover {
            ul {
              opacity: 1;
              visibility: visible;
              transform: translate(0, calc(100% - 20px));
            }
          }
          ul {
            list-style: none;
            padding: 0px;
            bottom: 0px;
            position: absolute;
            transform: translate(0, calc(100% - 15px));
            background: getVar(theme-layout);
            border-radius: 10px;
            opacity: 0;
            visibility: hidden;
            transition: all 0.25s ease;
            li {
              a {
                padding: 5px;
                opacity: 0.7;
                &:hover {
                  opacity: 1;
                }
              }
            }
          }
        }
        a {
          padding: 4px 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          margin: 0px 1px;
          transition: all 0.25s ease;
          &:hover {
            background: getVar(theme-layout);
            transform: translate(0, -2px);
            box-shadow: 0px 5px 10px -5px rgba(0, 0, 0, 0.1);
          }
        }
        box-icon,
        svg {
          fill: getVar(theme-color);
          max-width: 18px;
        }
      }
    }
  }
  .header-effect {
    position: absolute;
    bottom: 0px;
    transform: rotate(0deg);
    max-width: 40px;
    max-height: 40px;
    z-index: 200;
    right: 0px;
    bottom: -38px;
    transition: all 0.25s ease;
    #Trazado_200 {
      fill: getVar(theme-bg2) !important;
      stroke: getVar(theme-bg2) !important;
    }
  }
}
.page {
  display: block;
  margin-top: 57px;
  position: relative;

  margin-bottom: 0px;
  padding-top: 200px !important;
  transition: all 0.25s ease;
  width: calc(100% - 260px);
  .sidebar {
    position: absolute;
    right: 0px !important;
    left: auto;
    top: 200px;
    width: auto;
    background: transparent;
    z-index: 1200;
    max-height: calc(100vh - 470px);
    overflow: auto;
    transition: 0s !important;
    > svg {
      display: none;
    }
    > .content-sidebar > .sidebar-links > li {
      margin-top: 0px !important;
    }
    .sidebar-links {
      padding-top: 0px !important;
    }
    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: darken(#f4f7f8, 20%);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: darken(#f4f7f8, 30%);
    }
    &.fixed {
      position: fixed !important;
      top: 55px !important;
      z-index: 10000 !important;
      max-height: calc(100vh - 270px);
    }
    .sidebar-link,
    .sidebar-heading {
      display: none;
    }
    .sidebar-sub-headers {
      display: block !important;
      margin-top: 20px;
      li {
        a {
          display: block !important;
          text-align: right;
          font-size: 0.8rem;
          padding: 3px;
          padding-right: 25px;
          opacity: 0.6;
          max-width: 200px;
          &:after {
            content: "";
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            right: 25px;
            left: auto;
            width: 5px !important;
            background: getVar(theme-color);
            height: 5px !important;
            transition: all 0.25s ease;
            border-radius: 10px;
            opacity: 0;
          }
          &.active {
            padding-right: 39px;
            opacity: 1;
            &:after {
              opacity: 1;
            }
          }
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }
  .content__default {
    h1 {
      display: none !important;
    }
  }
  .content__default {
    @extend .wrapper;
    margin: 0 auto;
  }
}
.page-edit {
  margin-top: 50px;
  font-size: 0.85rem;
  @extend .wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;
  .edit-link {
    display: inline-block;
    a {
      color: lighten($textColor, 25%);
      margin-right: 0.25rem;
    }
  }
  .last-updated {
    float: right;
    font-size: 0.85em;
    padding: 0px 10px;
    .prefix {
      padding-left: 10px;
      font-weight: 600;
    }
    .time {
      padding-left: 10px;
      font-weight: 400;

      opacity: 0.8;
    }
  }
}
.page-nav {
  @extend .wrapper;
  padding-top: 1rem;
  padding-bottom: 0;
  position: relative;
  box-icon {
    max-width: 18px;
    max-height: 18px;
    margin: 0px 5px;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    padding-left: 5px;
    border-radius: 12px;
    transition: all 0.25s ease;
    &:hover {
      background: getVar(theme-layout);
      transform: translate(0px);
    }
  }
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 2rem;
    margin-top: 0;

    padding-top: 1rem;
    overflow: hidden;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: block;
        padding: 0px;
      }
    }
  }
  .prev {
    ~ .next {
      float: right;
      padding-right: 5px;
      padding-left: 10px;
    }
  }
}

@media (max-width: 1300px) {
  .page .sidebar {
    display: none !important;
  }
}
@media (max-width: $MQMobile) {
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }
    .last-updated {
      font-size: 0.8em;
      float: none;
      text-align: left;
    }
  }
}
@media (max-width: 600px) {
  .page-nav {
    .inner {
      position: fixed;
      right: 0px;
      bottom: 34px;
      z-index: 1000;
      padding: 0px;
      margin: 0px;
      width: 100%;
      padding: 10px 0px;
      span {
        background: getVar(theme-layout);
        margin: 0px;
        border-radius: 0px 10px 10px 0px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
        transform: translate(0) !important;
        span {
          display: none;
        }
        &.next {
          padding: 0px;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 0px 10px 0px 0px;
        }
        &.prev {
          padding: 0px;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 0px 10px 0px 0px;
          ~ .next {
            border-radius: 10px 0px 0px 10px;
            transform: translate(0) !important;
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
            padding: 0px;
          }
        }
      }
    }
  }
  .page {
    .content__default {
      padding: 10px;
    }
  }
  .up {
    bottom: 50px;
    right: 0px;
    opacity: 0;
    pointer-events: none;
    margin: 0px;
    border-radius: 15px 0px 0px 0px;
    &.active {
      opacity: 1;
      pointer-events: auto;
    }
  }
  .header-page {
    table {
      display: none !important;
    }
    .header__content {
      height: 120px;
      padding-right: 30px !important;
      .flex-header {
        margin-bottom: 0px !important;
        #header-title {
          font-size: 1.5rem !important;
        }
      }
    }
  }
  .header-page {
    &.fixed {
      .header__content {
        height: 52px !important;
        .flex-header {
          #header-title {
            font-size: 1.2rem !important;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .page {
    ~ .carbon-ads {
      background: transparent;
      #carbonads {
        background: transparent;
        border-radius: 0px;
        margin-top: 0px;
        img {
          border-radius: 0px 0px 10px 10px !important;
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .page {
    padding-top: 140px !important;
  }
}
@media (max-width: 400px) {
  .header-page {
    .header__content {
      padding: 0px 20px !important;
    }
  }
}
</style>
