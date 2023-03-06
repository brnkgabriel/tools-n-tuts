<template>
  <div class="cell bottomnav" :style="style">
    <div class="nav" v-for="(cat, idx) in globalState.categories" :key="idx" @click="selectTools(cat)">
      <component :is="comp(cat)"></component>
      <div class="tabname text-xxs font-semibold">{{cat}}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AiTools from './tabs/AiTools.vue';
import Animation from './tabs/Animation.vue';
import AudioVideo from './tabs/AudioVideo.vue';
import Graphics from './tabs/Graphics.vue';
import Utilities from './tabs/Utilities.vue';
import Coding from './tabs/Coding.vue'
import Home from './tabs/Home.vue';
import { iTool } from '../types';

const { globalState, setSelectedTools, setTool } = useGlobals()

const style = computed(() => `background-color:${globalState.value.tool.bg_color};color:${globalState.value.tool.font_color}`)

const comp = (category: string) => {
  switch (category) {
    case "Animation": return Animation
    case "Audio & Video": return AudioVideo
    case "Coding": return Coding
    case "Graphics": return Graphics
    case "Utility": return Utilities
    case "AI Tools": return AiTools
    case "Home": return Home
  }
}

const selectTools = (category: string) => {
  const query = category === "Home" ? "" : category
  setTool(defaultTool)
  const selectedTools = globalState.value.tools.filter((tool: iTool) => tool.category.indexOf(query) !== -1)
  setSelectedTools(selectedTools)
}

</script> 