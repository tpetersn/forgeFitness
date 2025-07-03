<script setup lang="ts">
import { computed, ref } from 'vue'
import { useProductStore } from '../stores/products'
import { useCartStore } from '../stores/cart'
import ProductCard from '../components/ProductCard.vue'
import Footer from '../components/Footer.vue'
import FilterSidebar from '../components/FilterSidebar.vue'

const productsStore = useProductStore()
const cart          = useCartStore()

/* --- men’s catalog slice --- */
const menProducts = computed(() => productsStore.byCategory('men'))


/* filters for the filter sidebar */
const active = ref({
  sizes:  [] as string[],
  colors: [] as string[],
  tags:   [] as string[],
  sort:   '' as '' | 'asc' | 'desc'
})

function applyFilters(f) {    
  active.value = f
}

/* products after filters + sort */
const filtered = computed(() => {
  let out = menProducts.value.filter(p => {
    const sz = !active.value.sizes.length  || p.sizes.some(s  => active.value.sizes.includes(s))
    const cl = !active.value.colors.length || p.colors.some(c => active.value.colors.includes(c))
    const tg = !active.value.tags.length   || p.tags.some(t   => active.value.tags.includes(t))
    return sz && cl && tg
  })
  if (active.value.sort === 'asc')  out = [...out].sort((a,b)=>a.price-b.price)
  if (active.value.sort === 'desc') out = [...out].sort((a,b)=>b.price-a.price)
  return out
})

</script>

<template>
 <div class="mens-page">
      <!-- header -->
      <section class="section-header">
        <h2>MEN'S CLOTHING</h2>
        
      </section>
      <div class="mens-layout">
      <FilterSidebar @apply="applyFilters" class="sidebar" />


      <!-- grid -->
      <div class="product-grid">
        <ProductCard
          v-for="p in filtered"
          :key="p.id"
          :product="p"
          @add-to-cart="({ id, name, size, price, qty}) => cart.add(id, name, size, price, qty)"
        />
      </div>
    </div>
  </div>

</template>




<style scoped>
.mens-layout {
  display: flex;
}
.sidebar {
  flex: 0 0 260px;
}

.mens-page {
  padding: 2rem;
}

.section-header {
  background-image: url('../assets/bg.png');
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-weight: bolder;
}

.section-header h2 {
  font-size: 2rem;
  margin: 0;
  font-weight: bolder;
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

  align-items: flex-start;
  flex: 1 1 auto;
  padding-left: 2rem;
}
@media (max-width: 768px) {
  .mens-layout{
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ccc;
  }
  .product-grid {
    padding-left: 0;
  }
}

</style>
