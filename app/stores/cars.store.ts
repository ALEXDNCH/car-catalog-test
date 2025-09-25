import { defineStore } from "pinia";
import { type MaybeRef, computed, ref, toValue } from "vue";
import type { ICar } from "~/types/cars.types";

export const useCarsStore = defineStore("cars", () => {
  const cars = ref<ICar[]>([]);

  const setCars = (data: ICar[]) => {
    cars.value = data;
  };

  const carById = (id: MaybeRef<number | undefined>) =>
    computed(() => {
      const _id = toValue(id);
      return _id == null ? undefined : cars.value.find((c) => c.id === _id);
    });

  return {
    // state
    cars,

    // actions
    setCars,

    // getters
    carById
  };
});
