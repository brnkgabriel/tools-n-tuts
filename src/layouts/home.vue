<template>
  <div class="gridcontent w-screen h-screen font-body">
    <TopNav class="topnav" />
    <VideopaneComponent />
    <slot></slot>
    <BottomNav />
  </div>
</template>
<script setup lang="ts">
useHead(head)
</script>