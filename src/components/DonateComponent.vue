<template>
  <div>
    <div>Kindly make your selection</div>
    <SwitchComp left="NGN" right="USD" name="currency" :value="updateCurrency" />
    
    <!-- <div :class="btn" @click="handleDonate">
      <Spinloader />
      <DonateIcon />
      <div>Submit</div>
    </div> -->
    <NuxtLink :href="constants.PayPalUrl" target="_blank" :class="btn">Donate</NuxtLink>
  </div>
</template>
<script setup lang="ts">
import { iDonate, iFWResponse } from '../types';
import { loadScript } from "@paypal/paypal-js"

const donateRef = ref<iDonate>({
  txReference: `john-doe${Date.now()}`,
  amount: "500",
  currency: "NGN",
  customer: {
    email: "john.doe@gmail.com",
    name: "John Doe",
    phonenumber: "+234 815 310 8276"
  },
  meta: {
    consumer_id: Date.now(),
    consumer_mac: `john-doe${Date.now()}`
  }
})

const { btn } = useUi()

const updateCurrency = (value: string) => donateRef.value.currency = value

</script>
<style lang="">
  
</style>