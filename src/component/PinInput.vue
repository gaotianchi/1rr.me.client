<template>
  <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
    <div>
      <input v-model="value_1"
             type="text" aria-label="code-1" maxlength="1"
             id="code-1"
             ref="code_1"
             class="outline-none block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
             required
             @input="focus(2)"

      />
    </div>
    <div>
      <input v-model="value_2"
             type="text" aria-label="code-2" maxlength="1" id="code-2"
             ref="code_2"
             class="outline-none block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
             required
             @input="focus(3)"
      />
    </div>
    <div>
      <input v-model="value_3" type="text" aria-label="code-3" maxlength="1" id="code-3"
             ref="code_3"
             class="outline-none block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
             required
             @input="focus(4)"
      />
    </div>
    <div>
      <input v-model="value_4" type="text" aria-label="code-4" maxlength="1" id="code-4"
             ref="code_4"
             class="outline-none block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
             required
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, computed, watch} from 'vue';

const model = defineModel('pin', {
  type: String,
  default: ''
});

const value_1 = ref('');
const value_2 = ref('');
const value_3 = ref('');
const value_4 = ref('');

const code_1 = ref<HTMLInputElement | null>(null);
const code_2 = ref<HTMLInputElement | null>(null);
const code_3 = ref<HTMLInputElement | null>(null);
const code_4 = ref<HTMLInputElement | null>(null);

const pin = computed(() => value_1.value + value_2.value + value_3.value + value_4.value);

watch(pin, () => {
  model.value = pin.value;
});

const focus = (index: number) => {
  setTimeout(() => {
    switch (index) {
      case 1:
        code_1.value?.focus();
        break;
      case 2:
        code_2.value?.focus();
        break;
      case 3:
        code_3.value?.focus();
        break;
      case 4:
        code_4.value?.focus();
        break;
    }
  }, 100);
};

</script>

<style scoped>
</style>
