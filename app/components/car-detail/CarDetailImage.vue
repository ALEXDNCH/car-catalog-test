<script setup lang="ts">
  const { title, image } = defineProps<{
    title: string;
    image: string;
  }>();
</script>

<template>
  <div class="relative aspect-[16/9] w-full">
    <NuxtImg
      :src="image"
      :alt="title"
      class="absolute inset-0 h-full w-full object-cover"
      loading="lazy"
    />
  </div>
</template>
