import { computed, type Ref } from "vue";
import type { ICar } from "~/types/cars.types";
import { normalizeString } from "~/utils/normalizeString";

export function useCarsFilter(
  cars: Ref<ICar[] | undefined>,
  query: Ref<string>
): ComputedRef<ICar[]> {
  return computed(() => {
    const list = cars.value ?? [];
    const needle = normalizeString(query.value || "");
    if (!needle) return list;
    return list.filter(
      (car) =>
        normalizeString(car.make).includes(needle) || normalizeString(car.model).includes(needle)
    );
  });
}
