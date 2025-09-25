<script setup lang="ts">
  const { title, year, model, make } = defineProps<{
    title: string;
    make: string | number;
    model: string | number;
    year: string | number;
  }>();
</script>

<template>
  <div class="p-4 sm:p-5">
    <CarDetailTitle :title />

    <dl class="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
      <CarDetailMetaItem label="Make" :value="make" />
      <CarDetailMetaItem label="Model" :value="model" />
      <CarDetailMetaItem label="Year" :value="year" />
    </dl>
    <div class="mt-8">
      <slot />
    </div>
  </div>
</template>
