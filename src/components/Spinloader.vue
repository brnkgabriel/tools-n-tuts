<template>
  <div aria-label="spinloader" class="spin-loader"></div>
</template>
<script setup lang="ts">
</script>
<style>
.spin-loader {
  width: 16px;
  height: 16px;
  border: 2px solid #282828;
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: spin-loader .25s infinite linear;
}

@keyframes spin-loader {
  100% {
    transform: rotate(360deg);
  }
}
</style>