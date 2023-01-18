<template>
  <com-header></com-header>
  <div class="page">
    {{ pageData.pageName }}
  </div>
</template>

<script setup>
import {reactive} from 'vue';
import comHeader from '@/components/comHeader.vue'

const pageData = reactive({
  pageName: 'this is index page'
})

</script>

<style lang="less">

</style>
