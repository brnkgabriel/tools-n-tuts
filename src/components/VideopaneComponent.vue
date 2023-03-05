<template>
  <div class="cell videopane">
    <div class="cell video">
      <iframe v-if="!isImage" :src="globalState.tool.intro_video" class="iframe"></iframe>
      <img v-if="isImage" :src="globalState.tool.image" />
    </div>
    <div class="links">
      <NuxtLink class="link" :href="globalState.tool.homepage" :target="target(globalState.tool)" :style="style">
        <div class="link-txt">{{ homeTxt(globalState.tool) }}</div>
        <Homepage class="link-icn" />
      </NuxtLink>
      <NuxtLink class="link" :href="aboutHref(globalState.tool)" :target="target(globalState.tool)" :style="style">
        <div class="link-txt">{{ aboutTxt(globalState.tool) }}</div>
        <Documentation class="link-icn" />
      </NuxtLink>
      <NuxtLink class="link" :href="privacyHref(globalState.tool)" :target="target(globalState.tool)" :style="style">
        <div class="link-txt">{{ privacyTxt(globalState.tool) }}</div> 
        <component :is="privacyIcon(globalState.tool)"></component>
      </NuxtLink>
      <div v-if="!isHome" class="link" :style="style">
        <div class="link-txt">Tutorials</div>
        <Tutorials class="link-icn" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iTool } from '../types';
import Documentation from './icons/Documentation.vue';
import Download from './icons/Download.vue';
import Homepage from './icons/Homepage.vue';
import Tutorials from './icons/Tutorials.vue';


const { globalState } = useGlobals()

const style = computed(() => `background-color:${globalState.value.tool.bg_color}`)
const isHome = computed(() => globalState.value.tool.type === "home")

const isImage = computed(() => globalState.value.tool.intro_video === "")


const aboutHref = (tool: iTool) => {
  const isHome = tool.type === "home"
  return isHome ? '/about' : tool.documentation 
}
const privacyHref = (tool: iTool) => {
  const isHome = tool.type === "home"
  return isHome ? '/privacy' : tool.download_page 
}

const target = (tool: iTool) => {
  const isHome = tool.type === "home"
  return isHome ? '_self' : "_blank"
}

const aboutTxt = (tool: iTool) => {
  const isHome = tool.type === "home"
  return isHome ? "about" : "documentation"
}

const homeTxt = (tool: iTool) => {
  const isHome = tool.type === "home"
  return isHome ? "Home" : "Tool Home"
}

const privacyTxt = (tool: iTool) => {
  const isHome = tool.type === "home"
  return isHome ? "Privacy Policy" : "download"
}

const privacyIcon = (tool: iTool) => {
  const isHome = tool.type === "home"
  return isHome ? Documentation : Download
}
</script>