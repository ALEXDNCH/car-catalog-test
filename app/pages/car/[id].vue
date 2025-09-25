<script setup lang="ts">
  import { useQuery, useQueryClient } from "@tanstack/vue-query";
  import { fetchCarDetails, fetchCars } from "~/services/cars.service";
  import { useCarsStore } from "~/stores/cars.store";
  import { QUERY_KEYS } from "~/constants/queryKeys";
  import { MESSAGES } from "~/constants/messages";

  definePageMeta({ name: "car-id" });

  await useQueryClient().ensureQueryData({ queryKey: QUERY_KEYS.cars, queryFn: fetchCars });
  useQuery({ queryKey: QUERY_KEYS.cars, queryFn: fetchCars });

  const store = useCarsStore();
  const route = useRoute();

  const id = computed(() => Number(route.params.id));

  const car = store.carById(id);

  const carTitle = computed(() => `${car.value?.make} ${car.value?.model}`);

  const {
    data: details,
    isLoading,
    error
  } = useQuery({
    queryKey: QUERY_KEYS.carDetails(car.value?.make, car.value?.year),
    enabled: computed(() => !!car.value),
    queryFn: () => fetchCarDetails(car.value!.make, car.value!.year, car.value!.model)
  });

  useHead({
    title: car.value ? carTitle.value : MESSAGES.NOT_FOUND
  });
</script>

<template>
  <div v-if="car" class="space-y-4">
    <div class="rounded-2xl overflow-hidden">
      <LazyCarDetailImage :title="carTitle" :image="car.image" />
    </div>

    <LazyCarDetailAbout
      class="mt-1"
      :title="carTitle"
      :make="car.make"
      :model="car.model"
      :year="car.year"
    >
      <template #default>
        <div class="text-xl font-bold mb-4">Подробная информация</div>
        <LazyUiSkeleton v-if="isLoading" height="250px"  />
        <LazyUiError v-else-if="error" :error-text="MESSAGES.ERROR" />
        <LazyCarCard v-else-if="car" :details="details ?? null"  />
      </template>
    </LazyCarDetailAbout>
  </div>
  <UiError v-else :error-text="MESSAGES.NOT_FOUND" />
</template>
