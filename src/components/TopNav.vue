<template>
  <div :class="topnavwrap">
    <NuxtLink href="/" class="flex justify-center items-center gap-x-1" @click="setDefaultTool">
      <img :class="topnavlogo" src="/icons/logo.svg" alt="logo" />
      <div class="font-medium text-sm leading-4">
        <h1 class="font-semibold">Tools n Tuts</h1>
        <h1 class="text-xxs">Open source++</h1>
      </div>
    </NuxtLink>

    <NuxtLink href="/donate" :class="btn" :style="style">
      <Donate />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">

import Donate from './icons/Donate.vue';

const {
  topnavwrap,
  topnavlogo,
  btn
} = useUi()

const { globalState, setTool } = useGlobals()
const style = computed(() => `background-color:${globalState.value.tool.bg_color};color:white`)

const setDefaultTool = () => setTool(defaultTool)

const props = defineProps<{
  avatar?: string
  userName?: string
}>()
</script>