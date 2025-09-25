<script setup lang="ts">
  const {
    rounded = "4px",
    width = "100%",
    height = "1em"
  } = defineProps<{
    rounded?: string;
    width?: string;
    height?: string;
  }>();
</script>

<template>
  <span
    :style="{
      borderRadius: rounded,
      width,
      height
    }"
    :class="[
      'relative overflow-hidden bg-gray-400',
      'before:absolute before:inset-0 before:animate-[shimmer_1.5s_infinite]',
      'before:bg-gradient-to-r before:from-transparent before:via-gray-300 before:to-transparent',
      'block'
    ]"
  />
</template>

<style>
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>
