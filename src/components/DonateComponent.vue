<template>
  <div class="text-center flex justify-center items-center">
    <div>
      <div :class="mainline">Kindly partner with us to keep putting out more open source tools and tutorials</div>
      <div class="flex flex-col gap-y-2 justify-center items-center pt-1">
        <NuxtLink :href="constants.PayPalUrl" target="_blank" :class="btn" class="bg-mainblue-500 text-white w-1/2">
          PayPal ($)
        </NuxtLink>

        <NuxtLink :href="constants.PaystackUrl" target="_blank" :class="btn"
          class="bg-paystack-500 font-body text-white w-1/2">
          Paystack (&#8358;)
        </NuxtLink>
        <NuxtLink href="/" target="_blank" :class="btn" class="font-body w-1/2" :style="style">
          Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { btn, mainline } = useUi()

const { globalState } = useGlobals()
const style = computed(() => `background-color:${globalState.value.tool.bg_color};color:white`)
</script>
<style lang="">
  
</style>