<template>
  <div class="h-full w-screen font-body overflow-x-hidden">
    <TopNav class="h-[56px] px-2" />
    <div class="sm:grid sm:grid-cols-2 relative content"> 
      <div aria-label="slides" class="relative w-full overflow-hidden slides sm:flex flex-col">
        <img :src="globalState.tool.image" alt="background"/>
        <About :tool="globalState.tool" />
      </div>
      <div class="p-2 sm:h-full bottom-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const { globalState } = useGlobals()

useHead(head)
</script>
<style scoped>
.bottom-content {
  height: calc(100% - 56.25vw);
}
.content {
  height: calc(100% - 56px);
}

.slides {
  height: 56.25vw;
}
@media screen and (min-width: 640px) {
  .slides {
    height: fit-content;
  }

  .bottom-content {
    height: 100%;
  }
}
</style>