import type { RouteLocationRaw } from "#vue-router";

export const ROUTE = {
  INDEX: "index",
  CAR_DETAILS: "car-id"
} as const;

export const routes = {
  carDetails: (id: number | string): RouteLocationRaw => ({
    name: ROUTE.CAR_DETAILS,
    params: { id }
  })
} as const;
