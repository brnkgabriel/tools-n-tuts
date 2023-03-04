<template>
  <div class="cell videopane">
    <div class="cell video">
      <iframe v-if="!isImage" :src="globalState.tool.intro_video" class="iframe"></iframe>
      <NuxtImg :src="globalState.tool.image" />
    </div>
    <div class="links">
      <a class="link" :href="globalState.tool.homepage" target="_blank" :style="style">
        <div class="link-txt">homepage</div>
        <Homepage class="link-icn" />
      </a>
      <a class="link" :href="globalState.tool.download_page" target="_blank" :style="style">
        <div class="link-txt">download</div>
        <Download class="link-icn" />
      </a>
      <a class="link" :href="globalState.tool.documentation" target="_blank" :style="style">
        <div class="link-txt">documentation</div>
        <Documentation class="link-icn" />
      </a>
      <div class="link" :style="style">
        <div class="link-txt">tools</div>
        <Tutorials class="link-icn" />
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

const style = computed(() => `background-color:${globalState.value.tool.bg_color}`)

const isImage = computed(() => globalState.value.tool.intro_video === "")
</script>