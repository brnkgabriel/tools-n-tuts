<template>
  <div :aria-label="tool.name" class="cursor-pointer bg-white hover:shadow-custom relative rounded">
    <span class="-preloader -img absolute -loading"></span>
    <div class="tool-name w-full absolute" :class="subline_small">
      <span class="-preloader -txt absolute -loading"></span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iTool } from '~~/src/types';

defineProps<{ tool: iTool }>()

const { subline_small } = useUi()
</script>

<style scoped>
.-preloader.-img {
  width: 100%;
  height: calc(100% - 28px);
  top: 0;
}

.-preloader.-txt {
  width: 100%;
  height: 100%;
  left: 0;
}
.tool-name {
  width: 80%;
  height: 16px;
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