<script setup lang="ts">
  import { useRouteMatch } from "~/composables/useRouteMatch";
  import { ROUTE } from "~/constants/routes";
  import { useSearchParam } from "~/composables/useSearchParam";
  const searchValue = useSearchParam();

  const { sameRoute } = useRouteMatch();
</script>

<template>
  <header
    class="w-full min-h-16 py-3 border-b border-gray-200 flex flex-col sm:flex-row justify-between gap-3"
  >
    <UiAppLogo />
    <UiCarSearch v-show="sameRoute(ROUTE.INDEX)" v-model="searchValue" />
  </header>
</template>
