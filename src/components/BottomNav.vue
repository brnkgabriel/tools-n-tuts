<template>
  <div class="cell bottomnav">
    <!-- <div class="nav">
      <AiTools />
      <div class="tabname text-xxs font-semibold">Ai Tools</div>
    </div>
    <div class="nav">
      <Animation />
      <div class="tabname text-xxs font-semibold">Animation</div>
    </div>
    <div class="nav">
      <AudioVideo />
      <div class="tabname text-xxs font-semibold">Audio & Video</div>
    </div>
    <div class="nav">
      <Graphics />
      <div class="tabname text-xxs font-semibold">Graphics</div>
    </div>
    <div class="nav">
      <Utilities />
      <div class="tabname text-xxs font-semibold">Utilities</div>
    </div> -->
    
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
import { iTool } from '../types';

const { globalState, setSelectedTools } = useGlobals()

watch(globalState, () => console.log("categories are", globalState.value.categories))

const comp = (category: string) => {
  switch (category) {
    case "Animation": return Animation
    case "Audio & Video": return AudioVideo
    case "Coding": return Coding
    case "Graphics": return Graphics
    case "Utility": return Utilities
    case "AI Tools": return AiTools
  }
}

const selectTools = (category: string) => {
  const selectedTools = globalState.value.tools.filter((tool: iTool) => tool.category === category)
  setSelectedTools(selectedTools)
  console.log("clicking selected tools")
}

</script>
<style>
  .bottomnav {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 0 8px;
  }
</style>