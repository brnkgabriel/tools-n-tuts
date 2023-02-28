<template>
  <div class="gridcontent w-screen h-screen font-body">
    <TopNav class="topnav" />
    <VideopaneComponent />
    <slot></slot>
    <div class="cell bottomnav">bottom nav</div>
  </div>
</template>
<script setup lang="ts">
useHead(head)
</script>