<template>
  <section id="converter" class="material-container">
    <div class="flex flex-row justify-center">
      <input v-model="originalUrl" id="url-input" placeholder="原始链接" type="text" name="text" aria-label="text"
             class="w-[70%] h-12 px-4 rounded-full border-none outline-none border-gray-200 focus:border-gray-200 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out shadow-sm focus:shadow-lg hover:shadow-md active:scale-95">
    </div>
    <div class="flex flex-row w-full">
      <div class="flex-1  flex flex-col-reverse items-center">

      </div>

      <div class="flex justify-center m-8">
        <div class="flex items-center justify-center h-full">
          <button
              class="w-72 h-72 bg-gradient-to-r from-purple-600 to-teal-400 text-white rounded-full flex items-center justify-center text-xl font-semibold transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-500 hover:bg-teal-500 active:scale-95 active:shadow-none hover:scale-105 relative overflow-hidden">
            生成短链接
            <span
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-6 border-solid border-teal-500 rounded-full ring-animation opacity-0 group-hover:opacity-100 group-focus:opacity-100"></span>
          </button>
        </div>
      </div>

      <div class="flex-1 flex flex-col-reverse">
        <div id="pin-password" class="configure mb-2">
          <div class="flex flex-row items-center">
            <span class="mr-2"><Key/></span>
            <PinInput v-model="pin"/>
          </div>
        </div>
        <div id="expire-date" class="configure mb-2">
          <div class="flex flex-row items-center">
            <span class="mr-2"><Hourglass/></span>
            <FloatLabel>
              <DatePicker id="datepicker-24h" size="small" v-model="expiredAt" showTime hourFormat="24" fluid
                          placeholder="过期时间"/>
            </FloatLabel>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-row">

    </div>
  </section>
</template>

<script setup lang="ts">

import {DatePicker, FloatLabel} from "primevue";
import PinInput from "@/component/PinInput.vue";
import Key from "@/component/icon/Key.vue";
import Hourglass from "@/component/icon/Hourglass.vue";
import {ref} from "vue";

const pin = ref('');
const expiredAt = ref(null);
const originalUrl = ref('');
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