<template>
  <div class="flex items-center justify-center h-full">
    <button
        @click="convert()"
        class="w-72 h-72 bg-gradient-to-r from-purple-600 to-teal-400 text-white rounded-full flex items-center justify-center text-xl font-semibold transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500 hover:bg-teal-500 active:scale-95 active:shadow-none hover:scale-105 relative overflow-hidden">
      生成短链接
      <span
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-6 border-solid border-teal-500 rounded-full ring-animation opacity-0 group-hover:opacity-100 group-focus:opacity-100"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  convert: [void]
}>()

const convert = () => {
  emits("convert")
}
</script>

<style scoped>
@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
}

.ring-animation {
  animation: ring 1.5s infinite;
}
</style>