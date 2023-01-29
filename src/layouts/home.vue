<template>
  <div class="h-full w-screen font-body overflow-x-hidden">
    <TopNav class="h-[56px] px-2" />
    <div class="grid auto-rows-max md:auto-rows-fr grid-cols-1 md:grid-cols-2 relative content"> 
      <div aria-label="slides" class="relative w-full overflow-hidden slides">
        <div aria-label="slide" class="h-full w-full flex items-center justify-center" :style="coverStyle"></div>
      </div>
      <div class="p-2">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iGlobal } from '../types';

const coverObj = {
  "background-image": "url('/images/background_1920x1080v3.jpg')",
  "background-repeat": "no-repeat",
  "background-position": "center",
  "background-size": "cover"
}
const coverStyle = ref(obj2Str(coverObj))

useHead({
  title: "Tools n Tuts",
  meta: [
    { hid: 'og:image', property: 'og:image', content: "https://tools-n-tuts.vercel.app/images/background_1920x1080v3.jpg" },
    { hid: 'og:title', property: 'og:title', content: "Tools n Tuts" },
    { hid: 'og:name', property: 'og:name', content: "Tools n Tuts" },
    { hid: 'og:type', property: 'og:type', content: "website" },
    { hid: 'og:description', property: 'og:description', content: "The best open source tools and tutorials you need for work" },
    { hid: 'og:image:type', property: 'og:image:type', content: 'JPEG' },
    { hid: 'og:url', property: 'og:url', content: "https://tools-n-tuts.vercel.app/" },
    { hid: 'keywords', name: 'keywords', content: "tools, tuts, productivity, plus, open, source, open source, design, develop, animate, blender, 3D, programming, JavaScript, editing, audio, video, modeling, animation, rendering, applications, apps, tutorials, ui/ux, drawing" }
  ]
})
</script>
<style>
.content {
  height: calc(100% - 56px);
}

@media screen and (max-width: 767px) {
  
  .slides {
    height: 56.25vw;
    max-height: 432px;
  }

}
</style>