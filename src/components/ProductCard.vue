<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-img" />

    <div class="product-info">
      <strong>{{ product.name }}</strong>

      <div class="sizes">
        <span>Sizes - </span>
        <span v-for="s in product.sizes" :key="s">{{ s }}</span>
      </div>

      <div class="price-add">
        <span class="price">${{ product.price }}</span>
        <button class="add-btn" @click="handleAdd">+</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

/* ---------- props ---------- */
const props = defineProps<{
  product: {
    id: string
    name: string
    sizes: string[]
    price: number
    image: string
    tags?: string[]
  }
}>()

/* ---------- emits ---------- */
const emit = defineEmits<{
  (e: 'add-to-cart', payload: { id: string; size: string }): void
}>()

/* ---------- local state ---------- */
const handleAdd = () => {
  const size = props.product.sizes[0]  
  emit('add-to-cart', { id: props.product.id, size })
}
</script>


<style scoped>
.product-card {
  width: 200px;
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  padding: 0;
  border: 1px solid #ccc;
  font-size: 0.9rem;
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: white;
}

.product-info {
  padding: 0.5rem;
}

.sizes span {
  margin-right: 0.5rem;
}

.price-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
}

.price {
  font-weight: bold;
}

.add-btn {
  font-weight: bold;
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
