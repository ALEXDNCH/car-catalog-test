<script setup lang="ts">
  import type { ICar } from "~/types/cars.types";

  const { data } = defineProps<{ data: ICar[] }>();
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <LazyCarItem v-for="car in data" :key="car.id" :car="car" />
  </div>
</template>
