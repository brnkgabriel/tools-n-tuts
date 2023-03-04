<template>
  <div class="thumbnailpane relative">
    <div v-if="isLoaded" class="search flex justify-start items-center px-2 md:pl-0">
      <input type="text" name="search" autocomplete="off"
        class="pr-[40px] rounded-lg h-[36px] w-full search outline-mainblue-500 bg-white border border-gray-300 text-gray-900 text-sm focus:ring-rcnblue-500 focus:border-rcnblue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rcnblue-500 dark:focus:border-rcnblue-500"
        placeholder="Search for tool" v-model="searchTerm" />
    </div>
    <div v-if="isLoaded" class="-tpane thumbnails -front">
      <Tool class="thumb" v-for="(tool, idx) in globalState?.selectedTools" :key="idx" :tool="tool" @click="handleClick(tool)" />
    </div>
    <ComboBoxSkeleton v-if="!isLoaded" class="search flex items-center" />
    <div v-if="!isLoaded" class="thumbnails">
      <ToolSkeleton class="thumb" v-for="(tool, idx) in skeletonTools" :key="idx" :tool="tool" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { iGlobal, iTool } from '../types';

const {
  setTools, setTuts, globalState,
  setTool, setCategories,
  setSelectedTools
} = useGlobals()
const { input, btn } = useUi()
const isLoaded = computed(() => globalState.value.tools.length > 0)
const searchTerm = ref("")

watch(searchTerm, () => {
  const found = [...globalState.value.tools].filter((tool: iTool) => {
    const lcSearch = searchTerm.value.toLowerCase()
    const toolName = tool.name.toLowerCase()
    return toolName.indexOf(lcSearch) !== -1
  })
  setSelectedTools(found)
})

const options = { path: "" }
const { data, refresh } = await useLazyFetch(() => constants.toolsnTutsApi, { params: { ...options } })

watch(data, () => {
  const globals: iGlobal = data.value as iGlobal

  setTools(globals.tools)
  setSelectedTools(globals.tools)
  setTuts(globals.tuts)
  setCategories(globals.categories)
})

const handleClick = (tool: iTool) => {
  console.log("tool is", tool)
  setTool(tool)
}

const handleSearch = () => {
  console.log("searchTerm is", searchTerm.value)
}

onMounted(async () => await refresh())

</script>