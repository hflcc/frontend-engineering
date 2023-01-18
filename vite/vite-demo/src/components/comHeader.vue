<template>
  <div class="header">
    {{ headerTitle }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const headerTitle = ref('我是公共头部标题');
</script>

<style lang="less">

</style>
