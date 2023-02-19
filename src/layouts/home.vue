<template>
  <div class="h-full w-screen font-body overflow-x-hidden">
    <TopNav aria-label="top nav" class="h-[56px] px-2" />
    <div aria-label="content" class="sm:grid sm:grid-cols-2 relative content">
      <Detail />
      <slot></slot>
    </div>
    <BottomNav aria-label="bottom nav" class="h-[56px] px-2 sm:hidden" />
  </div>
</template>
<script setup lang="ts">

useHead(head)
</script>

<style scoped>
.content {
  height: calc(100% - 112px);
}

@media screen and (min-width: 640px) {
  .content {
    height: calc(100% - 56px)
  }
}
</style>