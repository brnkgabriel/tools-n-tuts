<template>
  <div :class="topnavwrap">
    <NuxtLink href="/" class="flex justify-center items-center gap-x-2">
      <img :class="topnavlogo" src="/icons/logo.svg" alt="logo" />
      <div class="capitalize font-bold">tools n tuts</div>
    </NuxtLink>

    <NuxtLink href="/donate" :class="btn">
      Donate
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">

import { iFWResponse } from "~~/src/types/index"

const {
  topnavwrap,
  topnavlogo,
  btn,
} = useUi()


const props = defineProps<{
  avatar?: string
  userName?: string
}>()
</script>