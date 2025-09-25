<script setup lang="ts">
  import type { ICar } from "~/types/cars.types";
  import { routes } from "~/constants/routes";

  const { car } = defineProps<{ car: ICar }>();
  const title = computed(() => `${car.make} ${car.model}`);
  const to = computed(() => routes.carDetails(car.id));
</script>

<template>
  <article
    class="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-transform duration-300 hover:-translate-y-1"
  >
    <NuxtLink :to class="block">
      <CarDetailImage :title="title" :image="car.image" />
    </NuxtLink>

    <CarDetailAbout :title="title" :make="car.make" :model="car.model" :year="car.year" />
  </article>
</template>
