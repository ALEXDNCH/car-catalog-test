import { useRouteQuery } from "@vueuse/router";

export function useSearchParam(param = "car") {
  return useRouteQuery<string>(param, "", { mode: "replace" });
}
