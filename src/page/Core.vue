<template>
  <div>
    <div id="converter" class="material-container">
      <div class="relative w-10/12">
        <input type="text" id="floating_outlined"
               class="block px-4 py-3 w-full text-sm text-gray-900 bg-transparent rounded-full border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-400 peer"
               placeholder=" "/>
        <label for="floating_outlined"
               class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-3 left-4 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-text-grey peer-focus:dark:text-grey peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-3 peer-focus:scale-75 peer-focus:-translate-y-4">原始链接</label>
      </div>
      <div class="wrap">
        <button
            class="button w-72 h-72 bg-gray-500 text-white rounded-full flex items-center justify-center text-xl font-semibold transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-300 hover:bg-gray-600 active:scale-95 active:shadow-none hover:scale-105">
        生成短链接
        </button>
      </div>
    </div>
    <div id="dashboard" class="material-container"></div>
    <div id="manager" class="material-container"></div>
  </div>
</template>

<script setup lang="ts">
</script>
<style>
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  min-width: 300px;
  min-height: 60px;
  display: inline-flex;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  font-weight: 700;
  color: #313133;
  background: #4FD1C5;
  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
}

.button::before {
  content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 6px solid #00FFCB;
  box-shadow: 0 0 60px rgba(0,255,203,.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

.button:hover,
.button:focus {
  color: #313133;
  transform: translateY(-6px);
}

.button:hover::before,
.button:focus::before {
  opacity: 1;
}

.button::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #00FFCB;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

.button:hover::after,
.button:focus::after {
  animation: none;
  display: none;
}

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
</style>
