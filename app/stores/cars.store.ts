import { defineStore } from "pinia";
import { type MaybeRef, computed, ref, toValue } from "vue";
import type { ICar } from "~/types/cars.types";

export const useCarsStore = defineStore("cars", () => {
  const cars = ref<ICar[]>([]);

  const search = ref<string>("");

  const setCars = (data: ICar[]) => {
    cars.value = data;
  };

  const filteredCars = computed(() => {
    const q = normalizeString(search.value);
    if (!q) return cars.value;
    return cars.value.filter(
      (c) => normalizeString(c.make).includes(q) || normalizeString(c.model).includes(q)
    );
  });

  const carById = (id: MaybeRef<number | undefined>) =>
    computed(() => {
      const _id = toValue(id);
      return _id == null ? undefined : cars.value.find((c) => c.id === _id);
    });

  return {
    // state
    cars,
    search,
    // actions
    setCars,
    // getters
    filteredCars,
    carById
  };
});
