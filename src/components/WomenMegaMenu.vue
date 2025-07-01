<template>
  <div class="mega-menu">
    <div class="mega-col">
      <RouterLink to="/women/tops">
        <h4>WOMEN’S TOPS</h4>
      </RouterLink>  
      <RouterLink to="/women/t-shirts">T-Shirts</RouterLink>
      <RouterLink to="/women/long-sleeve">Long Sleeve</RouterLink>
      <RouterLink to="/women/tanks">Tanks</RouterLink>
      <RouterLink to="/women/compression-fit">Compression Fit</RouterLink>
      <RouterLink to="/women/sweaters">Sweaters</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/women/bottoms">
        <h4>WOMEN’S BOTTOMS</h4>
      </RouterLink>    
      <RouterLink to="/women/leggings">Leggings</RouterLink>
      <RouterLink to="/women/shorts">Shorts</RouterLink>
      <RouterLink to="/women/pants">Pants</RouterLink>
      <RouterLink to="/women/skirts">Skirts</RouterLink>
      <RouterLink to="/women/joggers">Joggers</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/women/shoes">
        <h4>WOMEN’S SHOES</h4>
      </RouterLink>     
      <RouterLink to="/women/running-shoes">Running</RouterLink>
      <RouterLink to="/women/casual-shoes">Casual</RouterLink>
      <RouterLink to="/women/hiking-shoes">Hiking</RouterLink>
      <RouterLink to="/women/sandals">Sandals</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/women/sale">
        <h4>WOMEN’S SALE</h4>
      </RouterLink>    
      <RouterLink to="/women/sale-10">10% OFF</RouterLink>
      <RouterLink to="/women/sale-25">25% OFF</RouterLink>
      <RouterLink to="/women/sale-50">50% OFF</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.mega-menu {
    display: flex;
    gap: 4rem;
    padding: 2rem;
    background: white;
    width: 100vw;
    border-top: 1px solid #ddd;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.mega-col {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
}
.mega-col h4 {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}
.mega-col a {
    text-decoration: none;
    color: #111;
    font-size: 0.95rem;
}
.mega-col a:hover {
    color: #888;
}
</style>
