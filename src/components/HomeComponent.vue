<template>
  <div class="h-full p-2 bottom-content">
    <div v-if="isLoaded" class="-grid my-2">
      <Tool v-for="(tool, idx) in globalState?.tools" :key="idx" :tool="tool" @click="handleClick(tool)" />
    </div>
    <ComboBox v-if="globalState.categories.length > 0" :list="list" class="w-full" />
    <div v-if="!isLoaded" class="-grid my-2">
      <ToolSkeleton v-for="(tool, idx) in skeletonTools" :key="idx" :tool="tool" />
    </div>
    <ComboBoxSkeleton v-if="!isLoaded" />
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

onMounted(async () => await refresh())

</script>
<style scoped>
.-grid {
  height: calc(100% - 168px);
}
.bottom-content {
  height: calc(100% - 56.25vw);
}

@media screen and (min-width: 640px) {
  .bottom-content {
    height: 100%;
  }
}
</style>