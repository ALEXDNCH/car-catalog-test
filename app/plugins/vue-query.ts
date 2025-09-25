import { VueQueryPlugin, QueryClient, dehydrate, hydrate } from "@tanstack/vue-query";

export default defineNuxtPlugin((nuxtApp) => {
  const MINUTE = 60_000;
  const qc = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * MINUTE,
        gcTime: 30 * MINUTE,
        refetchOnWindowFocus: false,
        retry: 3
      }
    }
  });
  nuxtApp.vueApp.use(VueQueryPlugin, { queryClient: qc, enableDevtoolsV6Plugin: true });

  if (import.meta.server) {
    nuxtApp.hook("app:rendered", () => {
      nuxtApp.payload.state["vue-query"] = dehydrate(qc);
    });
  }
  if (import.meta.client) {
    const state = nuxtApp.payload.state["vue-query"];
    if (state) hydrate(qc, state);
  }
});
