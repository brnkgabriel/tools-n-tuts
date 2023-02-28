<template>
  <div class="detail">
    <div aria-label="slides" class="relative w-full overflow-hidden slides sm:flex flex-col">
      <img :src="globalState.tool.image" alt="background" />
    </div>
    <About class="about" :tool="globalState.tool" />
  </div>
</template>
<script setup lang="ts">

const { globalState } = useGlobals()
</script>
<style scoped>


.slides {
  height: 56.25vw;
  max-height: unset;
}

@media screen and (min-width: 390px) and (max-width: 639px) {

  .slides {
    max-width: 480px;
    max-height: 270px;
  }
  .detail {
    display: flex;
  }

  .about {
    width: calc(100% - 480px);
  }
}

@media screen and (min-width: 640px) {

  .slides {
    height: fit-content;
  }
}
</style>