<template>
  <div>
    <Converter/>
    <Dashboard/>
    <Manager/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Dashboard from "@/component/Dashboard.vue";
import Converter from "@/component/Converter.vue";
import Manager from "@/component/Manager.vue";

</script>

<style scoped>

</style>