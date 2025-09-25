<script setup lang="ts">
  const { errorText } = defineProps<{
    errorText: string;
  }>();
</script>

<template>
  <div class="text-red-400">
    {{ errorText }}
  </div>
</template>
