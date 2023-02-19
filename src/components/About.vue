<template>
  <div class="about p-2">
    <h1 class="txt mb-1">{{ globalState.tool.about }}</h1>
    <div aria-label="buttons" class="buttons grid gap-2 grid-cols-2 lg:grid-cols-4">
      <a :href="globalState.tool.homepage" class="p-2 rounded flex justify-start gap-1 items-center" target="_blank" :style="style">
        <Homepage />
        <span>Homepage</span>
      </a>
      <a :href="globalState.tool.documentation" class="p-2 rounded flex justify-start gap-1 items-center" target="_blank" :style="style">
        <Documentation />
        <span>Documentation</span>
      </a>
      <a :href="globalState.tool.download_page" class="p-2 rounded flex justify-start gap-1 items-center" target="_blank" :style="style">
        <Download />
        <span>Download</span>
      </a>
      <div class="p-2 rounded flex justify-start gap-1 items-center" :style="style">
        <Tutorials />
        <span>Tutorials</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Documentation from './icons/Documentation.vue';
import Download from './icons/Download.vue';
import Homepage from './icons/Homepage.vue';
import Tutorials from './icons/Tutorials.vue';


const { globalState } = useGlobals()

const style = computed(() => ({
  "background-color": globalState.value.tool.bg_color,
  "color": globalState.value.tool.font_color
}))
</script>
<style scoped>
.about {
  font-size: 12px;
  width: 100%;
}

.about .txt {
  white-space: initial;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 36px;
}

.buttons span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>