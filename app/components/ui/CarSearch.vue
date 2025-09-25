<script setup lang="ts">
  const model = defineModel<string>({ default: "" });
</script>

<template>
  <div class="relative w-full max-w-md">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
    </span>

    <input
      v-model="model"
      type="text"
      placeholder="Search by make or model"
      class="w-full rounded-lg border border-slate-300 pl-10 pr-3 py-2 text-sm placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    >
  </div>
</template>
