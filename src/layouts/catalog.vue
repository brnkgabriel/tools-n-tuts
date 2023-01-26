<template>
  <div
    class="max-w-full mx-auto h-full w-screen flex flex-col justify-between items-center font-body relative bg-rcngray-500">
    <TopNav :avatar="imgSrc('')" :user-name="'user'" class="h-[56px] w-full p-2" />
    <div class="px-2 h-middle w-full my-2 text-sm">
      <!-- <Register v-if="false" /> -->
      <slot v-if="true"></slot>
    </div>
    <BottomNav class="h-[56px] w-full" />
  </div>
</template>
<script setup lang="ts">

</script> 