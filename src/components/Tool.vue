<template>
  <div :aria-label="tool.name" class="cursor-pointer bg-white hover:shadow-custom p-2">
    <img class="w-3/4 mx-auto" :src="tool.logo" :alt="tool.name"/>
    <div class="tool-name" :class="subline_small">{{ tool.name }}</div>
  </div>
</template>
<script setup lang="ts">
import { iTool } from '../types';

defineProps<{ tool: iTool }>()

const { subline_small } = useUi()
</script>

<style>
.tool-name {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin-top: 4px;
}
</style>