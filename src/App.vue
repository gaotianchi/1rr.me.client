<script setup lang="ts">
import {RouterView} from 'vue-router'
import Header from "@/component/Header.vue";
import Footer from "@/component/Footer.vue";
</script>

<template>
  <Header/>
  <div class="bg-gray-100 font-sans w-full min-h-screen m-0 pt-5">
    <main>
    <RouterView/>
    </main>
  </div>
  <Footer/>
</template>
<style scoped>
main {
  max-width: 1000px;
  margin: auto;
}
</style>

