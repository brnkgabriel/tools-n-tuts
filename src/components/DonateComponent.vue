<template>
  <div>
    <div>Kindly make your selection</div>
    <SwitchComp left="NGN" right="USD" name="currency" :value="updateCurrency" />
    
    <!-- <div :class="btn" @click="handleDonate">
      <Spinloader />
      <DonateIcon />
      <div>Submit</div>
    </div> -->
    <a href="https://www.paypal.com/donate/?hosted_button_id=8UMRJ26T3HWSS" target="_blank" :class="btn">Donate</a>
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
const handleDonate = async () => {

  // const options = {
  //   headers: { "Content-type": "multipart/form-data" },
  //   method: 'POST',
  //   body: donateRef.value
  // }
 
  // const { data } = await useFetch(constants.donateApiUrl, options)
  // const fwResponse = data.value as iFWResponse
  
  // navigateTo(fwResponse.data.link, { external: true })

  const paypal = await loadScript({
    "client-id": "AWAnF-kyRIxIcW_5aOTIxHP7TuWgkeqwbhLq8DOJSjlqnVftD-yuS2W3RKiBN0g2JjgcZFcdesMZwNEa"
  })

  
}
</script>
<style lang="">
  
</style>