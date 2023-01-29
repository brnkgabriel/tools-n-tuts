<template>
  <Combobox v-model="selected">
    <div class="relative">
      <div aria-label="combo-input-wrap" :class="comboinputwrap">
        <ComboboxInput :class="comboInput()" :displayValue="(person: any) => person.name"
          @change="query = $event.target.value" />
        <ComboboxButton :class="combobutton">
          <ChevronUpDownIcon :class="chevronupdownicon" aria-hidden="true" />
        </ComboboxButton>
      </div>
      <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
        <ComboboxOptions
          :class="comboboxoptions">
          <div aria-label="nothing-found" v-if="filteredPeople.length === 0 && query !== ''"
            :class="nothingfound">
            Nothing found.
          </div>

          <ComboboxOption v-for="person in filteredPeople" as="template" :key="person.id" :value="person" v-slot="{ selected, active }">
            <li aria-label="comboboxoptionli" :class="handleActive(active)">
              <span aria-label="comboboxoptionspan" :class="handleSelected(selected)">
                {{ person.name }}
              </span>
              <span aria-label="comboboxoptionspanicon" v-if="selected" :class="handleActiveSpan(active)">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/24/solid/index'
import { iPerson, iCombined } from '../types';

const props = defineProps<{
  persons: iCombined[];
}>();

const emit = defineEmits<{
  (e: 'person', person: iPerson): void
  (e: 'persons', person: iPerson[]): void
}>()

const {
  comboinputwrap,
  combobutton,
  chevronupdownicon,
  comboboxoptions,
  nothingfound,
  comboboxoptionli,
  comboboxoptionspanicon
} = useUi()

const handleActive = (isActive: boolean) => isActive 
  ? `${comboboxoptionli} bg-teal-600 text-white`
  : `${comboboxoptionli} text-gray-900`
const handleSelected = (isSelected: boolean) => isSelected
  ? `block truncate font-medium`
  : `block truncate font-normal`
const handleActiveSpan = (isActive: boolean) => isActive
  ? `${comboboxoptionspanicon} text-white`
  : `${comboboxoptionspanicon} text-teal-600`

let people = computed(() => props.persons.map((person: iCombined) => ({ ...person, name: personName(person) })))
let selected = ref<iPerson>(people.value[0])
let query = ref('')

const handleFilter = (person: iPerson) => {
  return person.name.toLowerCase().replace(/\s+/g, '')
    .includes(query.value.toLowerCase().replace(/\s+/g, ''))
}

let filteredPeople = computed(
  () => query.value === '' ? people.value : people.value.filter(handleFilter)
)


watch(selected, () => emit("person", selected.value))
watch(filteredPeople, () => {
  emit("persons", filteredPeople.value)
})

</script>
