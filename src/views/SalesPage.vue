<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProductStore } from '../stores/products'
import { useCartStore }    from '../stores/cart'
import FilterSidebar       from '../components/FilterSidebar.vue'
import ProductCard         from '../components/ProductCard.vue'

/* ---------- grab all products ---------- */
const store = useProductStore()
const cart  = useCartStore()

/* all products that have the tag "sale" (case-insensitive) */
const saleProducts = computed(() =>
  store.all.filter(p => p.tags?.some(t => t.toLowerCase() === 'sale'))
)

const active = ref({
  sizes:  [] as string[],
  colors: [] as string[],
  tags:   [] as string[],
  sort:   '' as '' | 'asc' | 'desc'
})
function applyFilters(f: typeof active.value) { active.value = f }

/* ---------- visible items after filters ---------- */
const visible = computed(() => {
  let out = saleProducts.value.filter(p => {
    const bySize  = !active.value.sizes.length  || p.sizes.some(s  => active.value.sizes.includes(s))
    const byColor = !active.value.colors.length || p.colors?.some(c => active.value.colors.includes(c))
    const byTag   = !active.value.tags.length   || p.tags?.some(t   => active.value.tags.includes(t))
    return bySize && byColor && byTag
  })

  if (active.value.sort === 'asc')  out = [...out].sort((a,b)=>a.price-b.price)
  if (active.value.sort === 'desc') out = [...out].sort((a,b)=>b.price-a.price)
  return out
})
</script>

<template>
  <div class="catalog-page">
    <!-- banner -->
    <section class="section-header">
      <h2>SALE ITEMS</h2>
    </section>

    <!-- layout -->
    <div class="page-layout">
      <FilterSidebar class="sidebar" @apply="applyFilters" />

      <div class="product-grid">
        <ProductCard
          v-for="p in visible"
          :key="p.id"
          :product="p"
          @add-to-cart="({ id,name,size,price,qty}) => cart.add(id,name,size,price,qty)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

.page-layout { display:flex; }
.sidebar     { flex:0 0 260px; }

.catalog-page { padding:2rem; }

.section-header {
  background-image:url('../assets/bg.png');
  color:#fff;
  padding:1rem 2rem;
  border-radius:5px;
  font-weight:bolder;
}
.section-header h2 { margin:0; font-size:2rem; font-weight:bolder; }

.product-grid{
  margin-top:1.5rem;
  flex:1 1 auto;
  display:flex;
  flex-wrap:wrap;
  gap:2rem;
  align-items:flex-start;
  padding-left:2rem;
}

@media(max-width:768px){
  .page-layout{ flex-direction:column; }
  .sidebar{ width:100%; border-right:none; border-bottom:1px solid #ccc; }
  .product-grid{ padding-left:0; }
}
</style>
