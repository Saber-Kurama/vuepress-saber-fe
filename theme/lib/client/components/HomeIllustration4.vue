<script setup lang="ts">
const props = withDefaults(defineProps<{ data: any }>(), { data: {} });
</script>
<template>
  <div class="content-i">
    <div class="con-text">
      <h2 v-html="props.data.title" />

      <p v-html="props.data.details" />

      <button
        v-if="props.data.action"
        @click="$router.push(props.data.action)"
        class="btn-action"
      >
        {{ props.data.actionText }}
      </button>
    </div>
    <div class="con-ilus">
      <img class="not-darken" src="/vuesax-white-3.svg" alt="" />
      <img class="has-darken" src="/vuesax-dark-3.svg" alt="" />
    </div>
  </div>
</template>
<style lang="scss">
.content-i {
  width: 100%;
  padding: 120px 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1400px;
  margin: auto;
  .con-text {
    padding-left: 50px;
    width: 50%;
    h2 {
      border: 0px;
      font-size: 2rem;
      font-weight: normal;
    }
  }
  .con-ilus {
    width: 50%;
    height: 450px;
    padding-left: 50px;
    max-width: 600px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
