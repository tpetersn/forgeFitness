<template>
  <div class="search-results" v-if="results.length">
    <div
      v-for="product in results"
      :key="product.id"
      class="result-item"
    >
      <div class="info">
        <div class="name">{{ product.name }}</div>
        <div class="price">${{ product.price }}</div>
      </div>
      <button @click="$emit('add-to-cart', product)">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  results: {
    id: string
    name: string
    price: number
  }[]
}>()
defineEmits<{
  (e: 'add-to-cart', product: any): void
}>()
</script>

<style scoped>
.search-results {
  position: absolute;
  top: 100%;
  right: 0;
  width: 280px;
  max-height: 300px; /* allow scroll if >5 */
  overflow-y: auto;
  background: white;
  border: 1px solid #aaa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.result-item {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

.result-item:last-child {
  border-bottom: none;
}

.name {
  font-size: 1rem;
}

.price {
  font-size: 0.9rem;
  color: #666;
}
</style>
