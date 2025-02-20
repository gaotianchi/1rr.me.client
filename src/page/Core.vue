<template>
  <div>
    <section id="converter" class="material-container relative">
      <div class="w-10/12">
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
      <div id="configure">
        <div id="password" class="max-w-sm mx-auto">
          <div class="flex mb-2 space-x-2 rtl:space-x-reverse">
            <div>
              <input type="text" aria-label="code-1" maxlength="1" data-focus-input-init data-focus-input-next="code-2"
                     id="code-1"
                     class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     required/>
            </div>
            <div>
              <input type="text" aria-label="code-2" maxlength="1" data-focus-input-init data-focus-input-prev="code-1"
                     data-focus-input-next="code-3" id="code-2"
                     class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     required/>
            </div>
            <div>
              <input type="text" aria-label="code-3" maxlength="1" data-focus-input-init data-focus-input-prev="code-2"
                     data-focus-input-next="code-4" id="code-3"
                     class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     required/>
            </div>
            <div>
              <input type="text" aria-label="code-4" maxlength="1" data-focus-input-init data-focus-input-prev="code-3"
                     data-focus-input-next="code-5" id="code-4"
                     class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     required/>
            </div>
          </div>
        </div>
        <div id="expire"></div>
      </div>
    </section>
    <section id="dashboard" class="material-container"></section>
    <section id="manager" class="material-container"></section>
  </div>
</template>

<script setup lang="ts">
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

.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
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
  background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, .64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
}

.button::before {
  content: '';
  border-radius: 1000px;
  box-shadow: 0 0 60px rgba(0, 255, 203, .64);
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
  width: 30px;
  height: 30px;
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
