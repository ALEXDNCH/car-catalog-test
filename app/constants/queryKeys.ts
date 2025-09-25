export const QUERY_KEYS = {
  cars: ["cars"] as const,
  carDetails: (make?: string, year?: number | string) => ["car-details", make, year] as const
};
