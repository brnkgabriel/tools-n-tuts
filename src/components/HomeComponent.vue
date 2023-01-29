<template>
  <div class="h-full">
    <ComboBox :list="list" class="mb-2" />
    <div class="tool-list grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-2">
      <Tool v-for="(tool, idx) in globalState?.tools" :key="idx" :tool="tool" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { iComboItem, iGlobal } from '../types';

const { setGlobals, globalState } = useGlobals()

const options = { path: "" } 

const { data, refresh } = await useLazyFetch(() => constants.toolsnTutsApi, { params: { ...options } })

watch(data, () => {
  setGlobals(data.value as iGlobal)
  console.log("from home component, globalState is", globalState.value)
})

onMounted(async () => await refresh() )

const list:iComboItem[] = [
  { name: "Audio Editing" },
  { name: "Video Editing" },
  { name: "3D Modeling & Animation" },
  { name: "Utilities" }
]

</script>
<style>
.tool-list {
  height: calc(100% - 44px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>