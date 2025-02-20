<template>
  <section id="dashboard" class="material-container">
    <div class="p-8 pt-20">
      <div class="grid gap-6 lg:gap-8 md:grid-cols-3">
        <div
            class="relative p-6 rounded-2xl bg-white shadow-xl dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
          <div class="space-y-4">
            <div class="flex items-center space-x-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <span>Revenue</span>
            </div>
            <div class="text-4xl font-bold text-gray-800 dark:text-gray-100">
              $192.1k
            </div>
            <div class="flex items-center space-x-2 text-sm font-medium text-green-600">
              <span>32k increase</span>
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
        <div
            class="relative p-6 rounded-2xl bg-white shadow-xl dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
          <div class="space-y-4">
            <div class="flex items-center space-x-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <span>New customers</span>
            </div>
            <div class="text-4xl font-bold text-gray-800 dark:text-gray-100">
              1340
            </div>
            <div class="flex items-center space-x-2 text-sm font-medium text-red-600">
              <span>3% decrease</span>
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                      clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>

        <div
            class="relative p-6 rounded-2xl bg-white shadow-xl dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
          <div class="space-y-4">
            <div class="flex items-center space-x-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
              <span>New orders</span>
            </div>
            <div class="text-4xl font-bold text-gray-800 dark:text-gray-100">
              3543
            </div>
            <div class="flex items-center space-x-2 text-sm font-medium text-green-600">
              <span>7% increase</span>
              <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clip-rule="evenodd"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img alt="img" class="w-full" src="/img.png"/>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>