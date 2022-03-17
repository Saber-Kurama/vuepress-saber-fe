<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const active = ref(0);
const number = ref(12);
const handleClick = () => {
  // router.push('/docs/components/Card')
  active.value = 0;
  // localStorage
};
const handleRemove = () => {
  active.value = 0;
};
onMounted(() => {
  if (localStorage.notificationHidden == number.value) {
    active.value = 0;
  } else {
    active.value = number.value;
  }
});
</script>
<template>
  <div v-if="active == number" class="header-notification">
    <div class="con-text-n">
      <div class="icon-n">
        <i class="bx bxs-megaphone"></i>
      </div>
      <div class="text-n">
        <h3> 查看最新动态<b><router-link to="/docs/meta">组件开发</router-link></b> 🎉</h3>
        <!-- <p>See the examples and the new documentation</p> -->
      </div>
    </div>
    <div class="con-btn-n">
      <!-- <button class="btn-info" @click="handleClick">👉 More information</button> -->
      <button @click="handleRemove" class="btn-x">
        <i class="bx bx-x"></i>
      </button>
    </div>
  </div>
</template>
<style lang="scss">
@function getVar($var) {
  @return unquote("var(--vs-" + $var + ")");
}

.header-notification {
  width: 100%;
  position: fixed;
  height: 40px;
  background: var(--vs-theme-bg2);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    .con-text-n {
      .icon-n {
        width: 60px;
      }
    }
  }
  .con-text-n {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: calc(100% - 200px);
    .icon-n {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--vs-theme-color);
      background: rgba(0, 0, 0, 0.05);
      margin-right: 20px;
      transition: all 0.25s ease;
    }
    .text-n {
      h3 {
        margin: 0px;
        padding: 0px;
        font-size: 0.7rem;
        color: var(--vs-theme-color);
        font-weight: normal;
        b {
          text-decoration: underline;
          font-weight: 600;
        }
      }
      p {
        margin: 0px;
        padding: 0px;
        font-size: 0.55rem;
        color: var(--vs-theme-color);
      }
    }
  }
  .con-btn-n {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      padding: 5px 10px;
      height: 30px;
      border-radius: 20px;
      border: 0px;
      background: transparent;
      color: var(--vs-theme-color);
      font-size: 0.65rem;
      background: rgba(0, 0, 0, 0.05);
      transition: all 0.25s ease;
      margin-right: 10px;
      &.btn-x {
        margin-right: 20px;
        font-size: 1rem;
        padding: 0px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    }
  }
  ~ .navbar:not(.fixed) {
    top: 40px !important;
    ~ .page {
      margin-top: 97px;
    }
    ~ .siderbar {
      top: 97px;
    }
  }
}

@media (max-width: 500px) {
  .header-notification {
    ~ .navbar.fixed {
      ~ .carbon-ads {
        margin-top: 6px;
      }
    }
    ~ .carbon-ads {
      margin-top: 42px;
    }
    .con-text-n {
      width: calc(100% - 30px);
    }
    .con-btn-n {
      .btn-info {
        display: none;
      }
      button.btn-x {
        margin-right: 10px;
      }
    }
  }
}
@media (max-width: 400px) {
  .header-notification {
    .con-text-n {
      .icon-n {
        margin-right: 6px;
        width: 30px;
      }
    }
  }
}
@media (max-width: 300px) {
  .header-notification {
    .con-text-n {
      padding-left: 8px;
      .icon-n {
        display: none;
      }
    }
  }
}
</style>
