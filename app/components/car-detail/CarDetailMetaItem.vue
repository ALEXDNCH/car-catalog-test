<script setup lang="ts">
  const { label, value } = defineProps<{
    label: string;
    value: string | number | null | undefined;
  }>();
</script>

<template>
  <div class="text-slate-500 py-1 flex items-center gap-x-0.5">
    <div>{{ label }}:</div>
    <div class="font-medium text-slate-900">{{ value ?? "—" }}</div>
  </div>
</template>
