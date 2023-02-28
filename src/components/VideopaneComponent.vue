<template>
  <div class="cell videopane">
    <div class="cell video">
      <iframe v-if="!isImage" :src="globalState.tool.intro_video" class="iframe"></iframe>
      <NuxtImg :src="globalState.tool.image" />
    </div>
    <div class="links">
      <div class="link">
        <Homepage class="link-icn" />
        <div class="link-txt">homepage</div>
      </div>
      <div class="link">
        <Download class="link-icn" />
        <div class="link-txt">download</div>
      </div>
      <div class="link">
        <Documentation class="link-icn" />
        <div class="link-txt">documentation</div>
      </div>
      <div class="link">
        <Tutorials class="link-icn" />
        <div class="link-txt">tools</div>
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

const isImage = computed(() => globalState.value.tool.intro_video === "")
</script>