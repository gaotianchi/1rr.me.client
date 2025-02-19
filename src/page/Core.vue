<template>
  <div>
    <div id="converter" class="material-container">

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
</style>
