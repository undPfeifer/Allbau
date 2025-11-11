<script setup lang="ts">
import { ref } from 'vue'

const images = ref<string[]>([])

if (process.client) {
  const res = await fetch('/gallery.json').then(r => r.json())
  images.value = res
}
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
