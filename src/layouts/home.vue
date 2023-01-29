<template>
  <div class="h-full w-screen font-body overflow-x-hidden">
    <TopNav class="h-[56px] px-2" />
    <div class="grid grid-cols-1 sm:grid-cols-2 relative content">
      <NuxtLink href="/" :class="logo">
        <img src="/icons/logo.svg" alt="logo" />
      </NuxtLink>
      <div aria-label="slides" class="relative w-full h-40% overflow-hidden landscape:h-full landscape:w-40%">
        <div aria-label="slide" class="h-full w-full flex items-center justify-center" :style="coverStyle"></div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">

const { logo, homelayoutbottomcontentwrap } = useUi()

const coverObj = {
  "background-image": "url('/images/background_1920x1080v3.jpg')",
  "background-repeat": "no-repeat",
  "background-position": "center",
  "background-size": "cover"
}
const coverStyle = ref(obj2Str(coverObj))

useHead({
  meta: [
    { hid: 'og:image', property: 'og:image', content: "https://tools-n-tuts.vercel.app/images/background_1920x1080v3.jpg" },
    { hid: 'og:title', property: 'og:title', content: "Tools n Tuts" },
    { hid: 'og:type', property: 'og:type', content: "website" },
    { hid: 'og:url', property: 'og:url', content: "https://tools-n-tuts.vercel.app/" },
    { hid: 'keywords', name: 'keywords', content: "tools, tuts, productivity, plus, open, source, open source, design, develop, animate, blender, 3D, programming, JavaScript, editing, audio, video, modeling, animation, rendering, applications, apps, tutorials, ui/ux, drawing" }
  ]
})
</script>
<style>
.content {
  height: calc(100% - 56px);
}
</style>