<template>
  <div class="page">
    <div class="red">vite-demo</div>
    <div class="red-bg">{{ redBg }}</div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const redBg = ref('我是公共的头部背景');
</script>

<style scoped lang="less">
@import "./style/index.less";
</style>
