<template>
  <div class="max-w-5xl min-h-96 mx-auto my-3 px-7 rounded-lg bg-gray-50">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  body {
    @apply bg-slate-200 p-4;
  }
</style>
