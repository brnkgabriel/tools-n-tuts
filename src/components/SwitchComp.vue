<template lang="">
  <div aria-label="switchwrap" data-name="form-group gender" :class="switchwrap">
    <span>{{props.left}}</span>
    <Switch
      v-model="enabled"
      :name="props.name"
      :class="switchcomponent({ enabled, left: 'bg-pink-400', right: 'bg-blue-400' })">
      <span class="sr-only">Enable notifications</span>
      <span
        :class="switchcomponentspan({ enabled, left: 'translate-x-6', right: 'translate-x-1'})"></span>
    </Switch>
    <span>{{props.right}}</span>
  </div>
</template>
<script setup lang="ts">
import { Switch } from "@headlessui/vue";

const enabled = ref(false)

const props = defineProps<{
  left: string;
  right: string;
  name: string;
  value: (selected: string) => void;
}>()

const {
  switchwrap,
  switchcomponent,
  switchcomponentspan
} = useUi()

const setGender = () => {
  const gender = enabled.value ? props.right : props.left
  props.value(gender)
}

setGender()

watch(enabled, () => setGender()) 

</script> 