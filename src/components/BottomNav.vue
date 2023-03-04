<template>
  <div class="cell bottomnav">
    <div class="nav">
      <AiTools />
      <div class="tabname text-xxs font-semibold">Ai Tools</div>
    </div>
    <div class="nav">
      <Animation />
      <div class="tabname text-xxs font-semibold">Animation</div>
    </div>
    <div class="nav">
      <AudioVideo />
      <div class="tabname text-xxs font-semibold">Audiovisual</div>
    </div>
    <div class="nav">
      <Graphics />
      <div class="tabname text-xxs font-semibold">Graphics</div>
    </div>
    <div class="nav">
      <Utilities />
      <div class="tabname text-xxs font-semibold">Utilities</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import AiTools from './tabs/AiTools.vue';
import Animation from './tabs/Animation.vue';
import AudioVideo from './tabs/AudioVideo.vue';
import Graphics from './tabs/Graphics.vue';
import Utilities from './tabs/Utilities.vue';

</script>
<style>
  .bottomnav {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 0 8px;
  }
</style>