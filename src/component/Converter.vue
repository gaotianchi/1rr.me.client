<template>
  <section id="converter" class="material-container">
    <div class="flex flex-row justify-center">
      <input id="url-input" v-model="url" :disabled="status"
             :placeholder="status ? 'https://1rr.me/kKDOdk' : 'https://looooooooooooooooooooooooooooooonooooooooooooooooooooooooooooogurl.com'"
             aria-label="text" name="text" type="text"
             :class="{'w-200': !status, 'w-50': status}"
             class="w-24 h-12 px-4 rounded-full border-none outline-none border-gray-200
                focus:border-gray-200 focus:ring-2 focus:ring-blue-300
                transition-all duration-300 ease-in-out
                shadow-sm focus:shadow-lg hover:shadow-md active:scale-95">
    </div>
    <div class="flex flex-row w-full">

      <!--左侧-->
      <div class="flex-1  flex flex-col-reverse items-center">
      </div>

      <!--中间的主按钮-->
      <div class="flex justify-center m-8">
        <div class="flex flex-col items-center justify-center h-full relative">
          <button
              :title="status ? '复制短链接' : '生成短链接'"
              id="generate-copy"
              @click="handleConverterButton()"
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

      <!--右侧表单和展示-->
      <div class="flex-1 flex flex-col-reverse">

        <!-- 转化结果 -->
        <transition name="fade">
          <div v-if="status" class="flex flex-col">

            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center space-x-2">
                <i class="pi pi-calendar text-xl text-gray-600"></i>
                <span class="text-sm text-gray-700">2025/02/04</span>
              </div>
              <i
                  class="pi pi-copy text-xl text-gray-500 cursor-pointer"
                  @click=""
              ></i>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <i class="pi pi-lock text-xl text-gray-600"></i>
                <span class="text-sm text-gray-700">1234</span>
              </div>
              <i
                  class="pi pi-copy text-xl text-gray-500 cursor-pointer"
                  @click=""
              ></i>
            </div>

          </div>
        </transition>

        <!-- 有效日期以及密码表单-->
        <transition name="fade">
          <div v-if="!status" class="flex flex-col">
            <div id="expire-date"
                 :class="{'opacity-0': status, 'opacity-100': !status}"
                 class="configure mb-2 transition-opacity duration-300 ease-in-out">
              <div class="flex flex-row items-center">
                <span class="mr-2" title="设置过期时间"><Hourglass/></span>
                <FloatLabel>
                  <DatePicker id="datepicker-24h" v-model="expireAt" fluid hourFormat="24" placeholder="过期时间" showTime
                              size="small"/>
                </FloatLabel>
              </div>
            </div>
            <div id="pin-password"
                 :class="{'opacity-0': status, 'opacity-100': !status}"
                 class="configure mb-2 transition-opacity duration-300 ease-in-out">
              <div class="flex flex-row items-center">
                <span class="mr-2" title="设置 PIN 密码"><Key/></span>
                <PinInput v-model="pin"/>
              </div>
            </div>
          </div>
        </transition>
      </div>

    </div>
    <Toast/>
  </section>
</template>

<script setup lang="ts">

import {DatePicker, FloatLabel} from "primevue";
import PinInput from "@/component/PinInput.vue";
import Key from "@/component/icon/Key.vue";
import Hourglass from "@/component/icon/Hourglass.vue";
import {ref} from "vue";
import LoopOnce from "@/component/icon/LoopOnce.vue";
import type {PostShortLinkRequest} from "@/request/LinkRequest.ts";
import type {ShortLinkResponse} from "@/response/LinkResponse.ts";
import Toast from 'primevue/toast';
import {useToast} from 'primevue/usetoast';
import {getShortLink} from "@/service/LinkServcie.ts";


const pin = ref<string>('');
const expireAt = ref<Date | null>(null);
const url = ref<string>('');
const status = ref<boolean>(true)

const toast = useToast();

const handleConverterButton = async (): Promise<void> => {
  if (!status.value) {
    // 1. 当前的状态是“生成短链接”
    const postShortLinkRequest: PostShortLinkRequest = {
      originalUrl: url.value,
      password: pin.value,
      expireAt: expireAt.value
    }
    try {
      const shortLinkResponse: ShortLinkResponse = await getShortLink(postShortLinkRequest);
      url.value = `https://1rr.me/${shortLinkResponse.code}`;
      status.value = true;
      toast.add({severity: 'success', summary: '短链接创建成功！', life: 3000});
    } catch (error) {
      toast.add({severity: 'error', summary: '错误', detail: error, life: 3000});
      return;
    }
  } else {
    // 2. 当前的动作是“复制”
    navigator.clipboard.writeText(url.value)
        .then(() => {
          toast.add({severity: 'success', summary: '复制成功', detail: '短链接已复制到剪贴板！', life: 3000});
        })
        .catch(() => {
          toast.add({severity: 'error', summary: '复制失败', detail: '请手动复制链接。', life: 3000});
        });
  }
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>