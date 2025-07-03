<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute }       from 'vue-router'
import { useProductStore } from '../stores/products'
import { useCartStore }    from '../stores/cart'
import FilterSidebar       from '../components/FilterSidebar.vue'
import ProductCard         from '../components/ProductCard.vue'

/* route params  */
const route         = useRoute()
const topSection    = computed(() => route.params.topSection  as string)        // men | women | accessories
const subSection    = computed(() => route.params.subSection  as string | undefined)
const subSubSection = computed(() => route.params.subSubSection as string | undefined)

/* store slices */
const productsStore = useProductStore()
const cart          = useCartStore()

/* start with top section ( aka. men / women / accessories) */
const genderProducts = computed(() => productsStore.byCategory(topSection.value))

/* narrow by tags that match section ( sub-section and subSubSection) */
const catalogSlice = computed(() => {
  let list = genderProducts.value
  if (subSection.value)    list = list.filter(p => p.tags?.includes(subSection.value))
  if (subSubSection.value) list = list.filter(p => p.tags?.includes(subSubSection.value))
  return list
})

/* sidebar filters  */
const active = ref({
  sizes:  [] as string[],
  colors: [] as string[],
  tags:   [] as string[],
  sort:   '' as '' | 'asc' | 'desc'
})
function applyFilters(f: typeof active.value) { active.value = f }

const visible = computed(() => {
  let out = catalogSlice.value.filter(p => {
    const sz = !active.value.sizes.length  || p.sizes.some(s  => active.value.sizes.includes(s))
    const cl = !active.value.colors.length || p.colors.some(c => active.value.colors.includes(c))
    const tg = !active.value.tags.length   || p.tags?.some(t   => active.value.tags.includes(t))
    return sz && cl && tg
  })
  if (active.value.sort === 'asc')  out = [...out].sort((a,b)=>a.price-b.price)
  if (active.value.sort === 'desc') out = [...out].sort((a,b)=>b.price-a.price)
  return out
})

/* more specific banner title */
function titlePart(str?: string) {
  return str ? ' / ' + str.replace(/-/g,' ').toUpperCase() : ''
}
</script>

<template>
  <div class="catalog-page">
    <!-- banner -->
    <section class="section-header">
      <h2>
        {{ topSection.toUpperCase() }}
        {{ titlePart(subSection) }}
        {{ titlePart(subSubSection) }}
      </h2>
    </section>

    <!-- layout and grid -->
    <div class="page-layout">
      <FilterSidebar class="sidebar" @apply="applyFilters" />

      <div class="product-grid">
        <ProductCard
          v-for="p in visible"
          :key="p.id"
          :product="p"
          @add-to-cart="({ id,name,size,price,qty})=>cart.add(id,name,size,price,qty)"
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

/* responsive styling */
@media(max-width:768px){
  .page-layout{ flex-direction:column; }
  .sidebar{ width:100%; border-right:none; border-bottom:1px solid #ccc; }
  .product-grid{ padding-left:0; }
}
</style>
