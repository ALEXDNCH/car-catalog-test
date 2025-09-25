import type { ICarDetails } from "~/types/cars.types";

const BASE_URL = "https://www.carqueryapi.com/api/0.3/";

export default defineEventHandler(async (event) => {
  const { make, year, model } = getQuery(event) as {
    make: string;
    year: string;
    model?: string;
  };

  if (!make || !year) {
    throw createError({ statusCode: 400, statusMessage: "make and year are required" });
  }

  const raw = await $fetch<string>(BASE_URL, {
    responseType: "text",
    params: {
      cmd: "getTrims",
      make: make.toLowerCase(),
      year,
      ...(model ? { model } : {})
    }
  });

  const { Trims } = JSON.parse(raw.trim().replace(/^\?/, "").replace(/;$/, "")) as {
    Trims: ICarDetails[];
  };

  setHeader(event, "Cache-Control", "public, max-age=0, s-maxage=600");

  return Trims?.[0] ?? {};
});
