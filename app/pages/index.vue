<script setup lang="ts">
  import { useQuery, useQueryClient } from "@tanstack/vue-query";
  import { fetchCars } from "~/services/cars.service";
  import { QUERY_KEYS } from "~/constants/queryKeys";
  import { useSearchParam } from "~/composables/useSearchParam";
  import { useCarsFilter } from "~/composables/useCarsFilter";
  import { MESSAGES } from "~/constants/messages";

  await useQueryClient().ensureQueryData({ queryKey: QUERY_KEYS.cars, queryFn: fetchCars });
  const { data, isLoading, error } = useQuery({ queryKey: QUERY_KEYS.cars, queryFn: fetchCars });

  const car = useSearchParam();
  const filteredCars = useCarsFilter(data, car);

  useHead({
    title: `Каталог авто • ${data.value?.length ?? 0} авто`,
    meta: [{ name: "description", content: "Лучший каталог машин" }]
  });
</script>

<template>
  <div v-if="isLoading">{{ MESSAGES.LOADING }}</div>
  <LazyUiError v-else-if="error" :error-text="MESSAGES.ERROR" />
  <LazyCarList v-else-if="filteredCars.length" :data="filteredCars" />
  <LazyUiError v-else :error-text="MESSAGES.NOT_FOUND" />
</template>
