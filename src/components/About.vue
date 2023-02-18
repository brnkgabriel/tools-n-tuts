<template>
  <div class="absolute about">
    {{ tool.about }}
  </div>
</template>
<script setup lang="ts">
import { iTool } from '../types';

const props = defineProps<{
  tool: iTool
}>()
</script>
<style scoped>
.about {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px;
  font-size: 14px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
</style>