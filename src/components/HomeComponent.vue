<template>
  <div class="h-full">
    <ComboBox v-if="globalState.categories.length > 0" :list="list" class="mb-2" />
    <div v-if="isLoaded" class="-grid">
      <Tool v-for="(tool, idx) in globalState?.tools" :key="idx" :tool="tool" @click="handleClick(tool)" />
    </div>
    <div v-if="!isLoaded" class="-grid">
      <ToolSkeleton v-for="(tool, idx) in skeletonTools" :key="idx" :tool="tool" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { iComboItem, iGlobal, iTool } from '../types';

const { setTools, setTuts, globalState, setTool, setCategories } = useGlobals()
const isLoaded = computed(() => globalState.value.tools.length > 0)
const list = computed(() => globalState.value.categories.map((name: string) => ({ name })))

const options = { path: "" }  
const { data, refresh } = await useLazyFetch(() => constants.toolsnTutsApi, { params: { ...options } })

watch(data, () => {
  const globals: iGlobal = data.value as iGlobal

  console.log("globals", globals)
  setTools(globals.tools)
  setTuts(globals.tuts)
  setCategories(globals.categories)
})

const handleClick = (tool: iTool) => setTool(tool)

onMounted(async () => await refresh() )

</script>