<template>
  <div>
    <div id="converter" class="material-container">
      <div class="address-bar">
        <input type="text" value="https://translate.google.com/?hl=zh-CN&sourceid=cnhp&sl=zh-CN&tl=en&text=https://www.fuaban.com/fpins/62" class="url-input" disabled />
      </div>
      <div class="file-icon">
        <i class="fas fa-file-archive"></i> <span class="zip-text">ZIP</span>
      </div>
      <div class="button-container">
        <button class="btn lock-code">锁码</button>
        <button class="btn validity-period">有效期</button>
      </div>
    </div>

    <div id="dashboard" class="material-container"></div>
    <div id="manager" class="material-container"></div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.material-container:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 2px 5px rgba(0, 0, 0, 0.1);
}

.material-container::before {
  content: "Container Title";
  font-size: 1.25rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
}

.material-container > * {
  margin-bottom: 12px;
}

#converter {
  background-color: #f0f4f8;
}

#dashboard {
  background-color: #e8f5e9;
}

#manager {
  background-color: #fff3e0;
}

.address-bar {
  width: 100%;
  margin-bottom: 20px;
}

.url-input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  color: #333;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
}

.url-input:disabled {
  background-color: #eaeaea;
}

.file-icon {
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
}

.zip-text {
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
}

.button-container {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lock-code {
  background-color: #6200ea;
  color: white;
}

.validity-period {
  background-color: transparent;
  color: #6200ea;
  border: 2px solid #6200ea;
}

.btn:hover {
  background-color: #3700b3;
}

.validity-period:hover {
  background-color: #f1f1f1;
}
</style>
