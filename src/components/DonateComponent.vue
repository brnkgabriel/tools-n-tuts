<template>
  <div class="text-center">
    <div :class="mainline_small">Kindly make your selection</div>
    <div class="flex flex-col gap-y-2 justify-center items-center pt-1">
      <NuxtLink :href="constants.PayPalUrl" target="_blank" :class="btn" class="bg-mainblue-500 text-white w-1/2">
        PayPal ($)
      </NuxtLink>
      
      <NuxtLink :href="constants.PaystackUrl" target="_blank" :class="btn" class="bg-paystack-500 font-body text-white w-1/2">
        Paystack (&#8358;)
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
  const { btn, mainline_small } = useUi()
</script>
<style lang="">
  
</style>