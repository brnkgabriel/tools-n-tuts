<template>
  <div :class="topnavwrap">
    <NuxtLink href="/" class="flex justify-center items-center gap-x-2">
      <img :class="topnavlogo" src="/icons/logo.svg" alt="logo"/>
      <div class="capitalize font-bold">tools n tuts</div>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">

const {
  topnavwrap,
  topnavnotification,
  topnavavatar,
  topnavlogo,
  topnavsitename
} = useUi()

const show = ref(false)

const toggleDropdown = () => {
  console.log("toggling dropdown") 
  show.value = !show.value
}

provide("show", { show })

const props = defineProps<{
  avatar?: string
  userName?: string
}>()
</script>