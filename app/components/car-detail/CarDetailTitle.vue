<script setup lang="ts">
  const { title } = defineProps<{
    title: string;
  }>();
</script>

<template>
  <h3 class="text-lg font-semibold text-slate-900">
    {{ title }}
  </h3>
</template>
