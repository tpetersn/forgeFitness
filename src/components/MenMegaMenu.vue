<!-- src/components/MenMegaMenu.vue -->
<template>
  <div class="mega-menu">
    <div class="mega-col">
      <RouterLink to="/men/tops">
        <h4>MEN’S TOPS</h4>
      </RouterLink>
      <RouterLink to="/men/t-shirts">T-Shirts</RouterLink>
      <RouterLink to="/men/long-sleeve">Long Sleeve</RouterLink>
      <RouterLink to="/men/muscle-shirt">Muscle Shirt</RouterLink>
      <RouterLink to="/men/compression-fit">Compression Fit</RouterLink>
      <RouterLink to="/men/sweaters">Sweaters</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/men/bottoms">
        <h4>MEN’S BOTTOMS</h4>
      </RouterLink>
      <RouterLink to="/men/shorts">Shorts</RouterLink>
      <RouterLink to="/men/pants">Pants</RouterLink>
      <RouterLink to="/men/sweatpants">Sweatpants</RouterLink>
      <RouterLink to="/men/swim-trunks">Swim Trunks</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/men/shoes">
        <h4>MEN’S SHOES</h4>
      </RouterLink>
      <RouterLink to="/men/running-shoes">Running</RouterLink>
      <RouterLink to="/men/casual-shoes">Casual</RouterLink>
      <RouterLink to="/men/hiking-shoes">Hiking</RouterLink>
      <RouterLink to="/men/sandals">Sandals</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/men/sale">
        <h4>MEN’S SALE</h4>
      </RouterLink>
      <RouterLink to="/men/sale-10">10% OFF</RouterLink>
      <RouterLink to="/men/sale-25">25% OFF</RouterLink>
      <RouterLink to="/men/sale-50">50% OFF</RouterLink>
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
