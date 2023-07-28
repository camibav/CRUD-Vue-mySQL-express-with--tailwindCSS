<script setup>
import {RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';
</script>

<template>
 <HomeView/>
 <RouterView />
</template>

<style >
.wrapper {
  max-width: 1200px;
  margin: 0 ;
  padding: 0 ;
  
}
body{
  background-color:#1b1a1a;
}
</style>
