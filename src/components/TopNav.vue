<template>
  <div :class="topnavwrap">
    <NuxtLink href="/" class="flex justify-center items-center gap-x-1">
      <img :class="topnavlogo" src="/icons/logo.svg" alt="logo" />
      <div class="font-medium text-sm leading-4">
        <div class="font-semibold">Tools n Tuts</div>
        <div class="text-xxs">Best open source tools & tutorials</div>
      </div>
    </NuxtLink>

    <NuxtLink :href="constants.PayPalUrl" target="_blank" :class="btn" class="bg-mainblue-500 text-white">
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