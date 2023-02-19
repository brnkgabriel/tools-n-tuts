<template>
  <div>
    <div aria-label="slides" class="relative w-full overflow-hidden slides sm:flex flex-col">
      <img :src="globalState.tool.image" alt="background" />
    </div>
    <div aria-label="gap" class="h-[116px]">
      <About :tool="globalState.tool" />
    </div>
  </div>
</template>
<script setup lang="ts">

const { globalState } = useGlobals()
</script>
<style scoped>


.slides {
  height: 56.25vw;
}

@media screen and (min-width: 640px) {

  .slides {
    height: fit-content;
  }
}
</style>