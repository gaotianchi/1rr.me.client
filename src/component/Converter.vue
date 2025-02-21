<template>
  <section id="converter" class="material-container">
    <div class="flex flex-row justify-center">
      <input v-model="url" id="url-input" placeholder="原始链接" type="text" name="text" aria-label="text"
             :class="{'w-200': !status, 'w-60': status}"
             class="w-24 h-12 px-4 rounded-full border-none outline-none border-gray-200
                focus:border-gray-200 focus:ring-2 focus:ring-blue-300
                transition-all duration-300 ease-in-out
                shadow-sm focus:shadow-lg hover:shadow-md active:scale-95">
    </div>
    <div class="flex flex-row w-full">
      <div class="flex-1  flex flex-col-reverse items-center">
      </div>

      <div class="flex justify-center m-8">
        <div class="flex flex-col items-center justify-center h-full relative">
          <button
              :title="status ? '复制短链接' : '生成短链接'"
              id="generate-copy"
              @click="status = true"
              :class="{
        'w-72 h-72 bg-gradient-to-r from-red-600 to-orange-500': !status,
        'w-35 h-35 bg-gradient-to-r from-green-600 to-blue-500': status
      }"
              class="cursor-pointer text-white rounded-full flex items-center justify-center text-xl font-semibold transform transition-all duration-300 ease-in-out shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 active:scale-95 active:shadow-none hover:scale-105 relative overflow-hidden">
            {{ status ? '复制' : '生成' }}
            <span
                :class="{
          'border-teal-500': status,
          'to-orange-500': !status
        }"
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-6 border-solid rounded-full ring-animation opacity-0 group-hover:opacity-100 group-focus:opacity-100"></span>

          </button>
          <button id="continue" v-show="status"
                  :class="{'opacity-0': !status, 'opacity-100': status}"
                  @click="status = false"
                  class="absolute top-[-10px] right-[-10px] p-2 cursor-pointer transform hover:scale-110 transition-all duration-300 ease-in-out"
                  title="继续生成">
            <LoopOnce class="text-white text-3xl"/>
          </button>

        </div>
      </div>

      <div class="flex-1 flex flex-col-reverse">
        <div id="pin-password"
             class="configure mb-2 transition-opacity duration-300 ease-in-out"
             :class="{'opacity-0': status, 'opacity-100': !status}">
          <div class="flex flex-row items-center">
            <span title="设置 PIN 密码" class="mr-2"><Key/></span>
            <PinInput v-model="pin"/>
          </div>
        </div>

        <div id="expire-date"
             class="configure mb-2 transition-opacity duration-300 ease-in-out"
             :class="{'opacity-0': status, 'opacity-100': !status}">
          <div class="flex flex-row items-center">
            <span title="设置过期时间" class="mr-2"><Hourglass/></span>
            <FloatLabel>
              <DatePicker id="datepicker-24h" size="small" v-model="expireAt" showTime hourFormat="24" fluid
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
import LoopOnce from "@/component/icon/LoopOnce.vue";
import {useCurrentUserStore} from "@/store/currentUser";

const currentUserStore = useCurrentUserStore();
const user = currentUserStore.user;

const pin = ref('');
const expireAt = ref(null);
const url = ref('');

const status = ref(false)


const generateShortUrl = async (originalUrl: string, pin: string, expiredAt: Date | null) => {

  const response = await fetch('http://localhost:8088/links', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user?.id_token,
    },
    body: JSON.stringify({
      originalUrl: originalUrl,
      password: pin,
      expireAt: expiredAt
    })
  })
  const location = response.headers.get('Location');
  if (location) {
    const code = location.split('=').pop();
    url.value = "https://1rr.me/" + code;
  } else {
    throw new Error('短链接生成失败');
  }
};

const copyShortUrl = (shortUrl: string): void => {
  navigator.clipboard.writeText(shortUrl)
      .then(() => {
        console.log('Short URL copied to clipboard:', shortUrl);
        alert('短链接已复制到剪贴板！');
      })
      .catch((err) => {
        console.error('Failed to copy short URL:', err);
        alert('复制失败，请手动复制链接。');
      });
};

const handleMainButtonClick = () => {
  if (status.value) {
    // 如果状态为 true，执行复制短链接操作
    if (url.value) {
      copyShortUrl(url.value);
    } else {
      console.error('短链接未生成，无法复制');
      alert('请先生成短链接！');
    }
  } else {
    if (!pin.value || !expireAt.value) {
      console.error('PIN 或过期时间未填写');
      alert('请填写 PIN 和过期时间！');
      return;
    }
    const shortUrl = generateShortUrl(url.value, pin.value, expireAt.value);
    console.log('Short URL generated:', shortUrl);
    alert('短链接已生成！');
  }
};

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