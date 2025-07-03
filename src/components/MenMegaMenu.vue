<!-- src/components/MenMegaMenu.vue -->
<template>
  <div class="mega-menu">
    <div class="mega-col">
      <RouterLink to="/men/tops">
        <h4>MEN’S TOPS</h4>
      </RouterLink>
      <RouterLink to="/men/tops/t-shirts">T-Shirts</RouterLink>
      <RouterLink to="/men/tops/long-sleeve">Long Sleeve</RouterLink>
      <RouterLink to="/men/tops/muscle-shirt">Muscle Shirt</RouterLink>
      <RouterLink to="/men/tops/sweater">Sweaters</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/men/bottoms">
        <h4>MEN’S BOTTOMS</h4>
      </RouterLink>
      <RouterLink to="/men/bottoms/shorts">Shorts</RouterLink>
      <RouterLink to="/men/bottoms/pants">Pants</RouterLink>
      <RouterLink to="/men/bottoms/sweatpants">Sweatpants</RouterLink>
      <RouterLink to="/men/bottoms/swim-trunks">Swim Trunks</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/men/shoes">
        <h4>MEN’S SHOES</h4>
      </RouterLink>
      <RouterLink to="/men/shoes/running-shoes">Running</RouterLink>
      <RouterLink to="/men/shoes/casual-shoes">Casual</RouterLink>
      <RouterLink to="/men/shoes/hiking-shoes">Hiking</RouterLink>
      <RouterLink to="/men/shoes/slip-on">Slip-On</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/sale/men">
        <h4>MEN’S SALE</h4>
      </RouterLink>

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
  width: 75vw;
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
