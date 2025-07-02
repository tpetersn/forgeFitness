<script setup lang="ts">
import { computed }          from 'vue'
import { useProductStore }   from '../stores/products'
import { useCartStore }      from '../stores/cart'
import ProductCard           from '../components/ProductCard.vue'

const productsStore = useProductStore()
const cart          = useCartStore()

/* --- men’s catalog slice --- */
const menProducts = computed(() => productsStore.byCategory('men'))
</script>

<template>
  <div class="mens-tops-page">
    <!-- header -->
    <section class="section-header">
      <h2>MEN'S CLOTHING</h2>
      
    </section>

    <!-- grid -->
    <div class="product-grid">
      <ProductCard
        v-for="p in menProducts"
        :key="p.id"
        :product="p"
        @add-to-cart="({ id, size }) => cart.add(id, size)"
      />
    </div>
  </div>
</template>




<style scoped>
.mens-tops-page {
  padding: 2rem;
}

.section-header {
  background: #333;
  color: white;
  padding: 1rem 2rem;
}

.section-header h2 {
  font-size: 2rem;
  margin: 0;
}

.featured {
  font-weight: 600;
  margin-top: 0.5rem;
  color: black;
  background: white;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-left: 3px solid black;
}

.product-grid {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>
