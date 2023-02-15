<template>
  <div :class="topnavwrap">
    <NuxtLink href="/" class="flex justify-center items-center gap-x-1">
      <img :class="topnavlogo" src="/icons/logo.svg" alt="logo" />
      <div class="font-medium text-sm leading-4">
        <h1 class="font-semibold">Tools n Tuts</h1>
        <div class="text-xxs">Best open source tools & tutorials</div>
      </div>
    </NuxtLink>

    <NuxtLink href="/donate" :class="btn" class="text-white">
      <Donate />
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