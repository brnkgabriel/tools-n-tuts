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
  amount: "100",
  currency: "NGN",
  customer: {
    email: "john.doe@gmail.com",
    name: "John Doe",
    phonenumber: "+234 815 310 8276"
  }
})

const { btn } = useUi()

const updateCurrency = (value: string) => donateRef.value.currency = value
const handleDonate = async () => {

  const options = {
    headers: { "Content-type": "multipart/form-data" },
    method: 'POST',
    body: { currency: "NGN" }
  }

  const { data } = await useFetch(constants.donateApiUrl, options)
  const fwResponse = data.value as iFWResponse
  
  navigateTo(fwResponse.data.link, { external: true })
}
</script>
<style lang="">
  
</style>