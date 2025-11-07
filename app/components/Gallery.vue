<script setup lang="ts">
import { ref, onMounted } from 'vue';

const images = ref<string[]>([]);

onMounted(async () => {
  const { data } = await useFetch('/api/gallery');
  images.value = data.value || [];
});
</script>

<template>
  <div class="gallery-grid">
    <div v-for="img in images" :key="img" class="gallery-item">
      <img :src="img" alt="Gallery image" />
    </div>
  </div>
</template>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 12px;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.2s;
}

</style>
