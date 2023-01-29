<template>
  <div class="h-1/2">
    <ComboBox :list="list" />
    <div class="h-[200px] overflow-auto">
      <div v-for="(tool, idx) in globalState?.tools" :key="idx">{{ tool.name }}</div>
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