<template>
  <div>
    <ComboBox :list="list" />
  </div>
</template>
<script setup lang="ts">
import { iComboItem } from '../types';
const list:iComboItem[] = [
  { name: "Audio Editing" },
  { name: "Video Editing" },
  { name: "3D Modeling & Animation" },
  { name: "Utilities" }
]

</script>