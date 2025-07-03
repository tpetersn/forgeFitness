<!-- src/components/Navbar.vue -->
<template>
  <nav class="ff-navbar">
    <!-- logo section  -->
    <RouterLink to="/" class="ff-logo">
      <img :src="logo" alt="Forge Fitness logo" />
    </RouterLink>

    <!-- primary links -->
    <ul class="ff-links">
      <!-- MEN section -->
      <li
        class="ff-link-wrapper"
        @mouseenter="active = 'men'"
        @mouseleave="active = null"
      >
        <RouterLink to="/men" class="ff-link" active-class="ff-active">MEN</RouterLink>

        <!-- men mega menu -->
        <div v-if="active === 'men'" class="ff-mega">
          <MenMegaMenu />
        </div>
      </li>

      <!-- WOMEN  section -->
      <li
        class="ff-link-wrapper"
        @mouseenter="active = 'women'"
        @mouseleave="active = null"
      >
        <RouterLink to="/women" class="ff-link" active-class="ff-active"
          >WOMEN</RouterLink
        >
        <div v-if="active === 'women'" class="ff-mega">
            <WomenMegaMenu />
        </div>
        
      </li>

      <!-- ACCESSORIES -->
      <li
        class="ff-link-wrapper"
        @mouseenter="active = 'accessories'"
        @mouseleave="active = null"
      >
        <RouterLink
          to="/accessories"
          class="ff-link"
          active-class="ff-active"
          >ACCESSORIES</RouterLink
        >
        <div v-if="active === 'accessories'" class="ff-mega">
            <AccessoriesMegaMenu />
        </div>
        
      </li>
    </ul>

    <!-- search + cart -->
    <div class="ff-right">
      <div class="ff-search">
        <span class="icon">
          <Search />
        </span>
        <input type="text" placeholder="Search…" v-model="query" />
        <button
          v-if="query"
          class="clear-btn"
          @click="query = ''"
          aria-label="Clear search"
        >×</button>
        <SearchResults :results="filteredProducts" @add-to-cart="addToCart" />
      </div>
      <button class="ff-cart" @click="cart.toggle">
        <Cart />
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue';
import { RouterLink } from 'vue-router';
import logo from '../assets/logo.png'; 
import Search from '../assets/icons/search.vue';
import Cart from '../assets/icons/cart.vue';
import MenMegaMenu from './MenMegaMenu.vue';
import WomenMegaMenu from './WomenMegaMenu.vue';
import AccessoriesMegaMenu from './AccessoriesMegaMenu.vue';
import { useCartStore } from '../stores/cart';
import { useProductStore } from '../stores/products';
import SearchResults from './SearchResults.vue';

const cart = useCartStore();

// which mega-menu (if any) is open
const active = ref<string | null>(null);

const query = ref('')

const productStore = useProductStore()


const filteredProducts = computed(() => {
  if (!query.value.trim()) return []
  const q = query.value.toLowerCase()

  return productStore.all.filter(p => {
    /* checking name */
    if (p.name.toLowerCase().includes(q)) return true

    /* checking category  */
    if ((p.category ?? '').toLowerCase().includes(q)) return true

    /* checking tags */
    if (p.tags?.some(tag => tag.toLowerCase().includes(q))) return true

    /* checking colours */
    if (p.colors?.some(col => col.toLowerCase().includes(q))) return true

    /* checking sizes */
    if (p.sizes?.some(sz => sz.toLowerCase().includes(q))) return true

    return false
  })
  .slice(0, 20)            // keep a hard cap if you like
})

function addToCart(product: any) {
  cart.add(product.id, product.name, product.sizes[0], product.price, 1)
  query.value = ''
}


</script>

<style scoped>
/* ---- Layout ---- */
.ff-navbar {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
    border: 1px solid #c9c9c9;
    box-sizing: border-box;
    position: relative;
    z-index: 50;
    background: #fff;
    position: relative;
}

.ff-logo img {
    height: 55px;
    width: auto;
}

/* ---- Links ---- */
.ff-links {
    list-style: none;
    display: flex;
    gap: 3rem;
    margin: 0 auto; /* pushes search/cart to far right */
    padding: 0;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 0.02em;
}

.ff-link {
    color: #000;
    text-decoration: none;
    transition: color 0.25s;
}

.ff-link:hover,
.ff-active {
    color: #585858;
}

/* ---- Mega-menu placeholder ---- */
.ff-link-wrapper {
    position: static;
}

.ff-mega {
    position: absolute;
    top: 100%;
    left: 50%;
    width: 75%;            
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    padding: 2rem 4rem;
    background: #fff;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    border-top: 1px solid #e5e5e5;
}

/* ---- Search + Cart ---- */
.ff-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.ff-search {
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid #b4b4b4;
    padding: 0.35rem 0.6rem;
    border-radius: 18px;
}

.ff-search input {
    border: none;
    outline: none;
    width: 6.5rem;
}
.clear-btn {
  position: absolute;
  right: 6px;                
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1;
}

.ff-cart {
    font-size: 1.3rem;
    text-decoration: none;
    color: #000;
    background-color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 15px;

}
.ff-cart:hover {
    background: #ececec86;
    border: 1px solid #2b28ff67;
}

/* ensure dropdown never overlaps navbar border */
.ff-navbar::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: #000000;
    pointer-events: none;
}
</style>
