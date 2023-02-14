<template>
  <div :aria-label="tool.name" class="cursor-pointer bg-white hover:shadow-custom relative rounded">
    <img :src="tool.logo" :alt="tool.name" />
    <div class="tool-name w-full absolute" :class="subline_small">{{ tool.name }}</div>
  </div>
</template>
<script setup lang="ts">
import { iTool } from '~~/src/types';

defineProps<{ tool: iTool }>()

const { subline_small } = useUi()
</script>

<style>
.tool-name {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin-top: 4px;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
}

img {
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  height: 55%;
}
</style>