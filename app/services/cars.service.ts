import { API_URI } from "~/constants/api_uri";
import type { ICar, ICarDetails } from "~/types/cars.types";
import { useCarsStore } from "~/stores/cars.store";

const TIMEOUT = 5000;

export async function fetchCars(): Promise<ICar[]> {
  const carsStore = useCarsStore();
  const res = await $fetch<ICar[]>(API_URI.CARS, {
    timeout: TIMEOUT
  });
  carsStore.setCars(res);
  return res;
}

export async function fetchCarDetails(
  make: string,
  year: number,
  model?: string
): Promise<ICarDetails | null> {
  return await $fetch<ICarDetails | null>(API_URI.CAR_DETAILS, {
    params: { make, year, model },
    timeout: TIMEOUT
  });
}
