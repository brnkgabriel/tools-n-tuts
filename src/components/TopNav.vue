<template>
  <div :class="topnavwrap">
    <NuxtLink href="/" class="flex justify-center items-center gap-x-1">
      <img :class="topnavlogo" src="/icons/logo.svg" alt="logo" />
      <div class="font-medium text-sm">Tools n Tuts</div>
    </NuxtLink>

    <NuxtLink :href="constants.PayPalUrl" target="_blank" :class="btn">
      Donate
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">

const {
  topnavwrap,
  topnavlogo,
  btn
} = useUi()


const props = defineProps<{
  avatar?: string
  userName?: string
}>()
</script>