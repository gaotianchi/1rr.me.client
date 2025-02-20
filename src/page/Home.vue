<template>
  <div>
    <section id="converter" class="material-container">
      <div class="flex flex-row justify-center">
        <input v-model="originalUrl" id="url-input" placeholder="原始链接" type="text" name="text" aria-label="text"
               class="w-[70%] h-12 px-4 rounded-full border-none outline-none border-gray-200 focus:border-gray-200 focus:ring-2 focus:ring-blue-300 transition-all duration-300 ease-in-out shadow-sm focus:shadow-lg hover:shadow-md active:scale-95">
      </div>
      <div class="flex flex-row w-full">
        <div class="flex-1  flex flex-col-reverse items-center">

        </div>

        <div class="flex justify-center m-8">
          <ConverterButton @convert=""/>
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
    <section id="dashboard" class="material-container">
      <Dashboard/>
      <img src="/img.png" alt="img" class="w-full"/>
    </section>
    <section id="manager" class="material-container"></section>
  </div>
</template>

<script setup lang="ts">
import PinInput from "@/component/PinInput.vue";
import ConverterButton from "@/component/ConverterButton.vue";
import {ref, watch} from "vue";
import Key from "@/component/icon/Key.vue";
import Hourglass from "@/component/icon/Hourglass.vue";
import {FloatLabel} from "primevue";
import {DatePicker} from "primevue";
import Dashboard from "@/component/Dashboard.vue";

const pin = ref('');
const expiredAt = ref(null);
const originalUrl = ref('');

</script>

<style scoped>

.material-container {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin: 24px;
  padding: 20px;
  transition: all 0.3s ease;
}

.material-container:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1);
}

.material-container > * {
  margin-bottom: 12px;
}

</style>