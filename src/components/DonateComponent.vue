<template>
  <div>
    <div>Kindly make your selection</div>
    <SwitchComp left="NGN" right="USD" name="currency" :value="updateCurrency" />
    
    <div :class="btn" @click="handleDonate">
      <Spinloader />
      <DonateIcon />
      <div>Submit</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iDonate, iFWResponse } from '../types';

const donateRef = ref<iDonate>({
  txReference: `john-doe${Date.now()}`,
  amount: "500",
  currency: "NGN",
  customer: {
    email: "",
    name: "",
    phonenumber: ""
  },
  meta: {
    consumer_id: Date.now(),
    consumer_mac: `john-doe${Date.now()}`
  }
})

const { btn } = useUi()

const updateCurrency = (value: string) => donateRef.value.currency = value
const handleDonate = async () => {

  const options = {
    headers: { "Content-type": "multipart/form-data" },
    method: 'POST',
    body: donateRef.value
  }

  const { data } = await useFetch(constants.donateApiUrl, options)
  console.log("data is", data)
  // const fwResponse = data.value as iFWResponse
  
  // navigateTo(fwResponse.data.link, { external: true })
}
</script>
<style lang="">
  
</style>