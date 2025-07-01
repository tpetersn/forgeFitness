<template>
  <div class="mega-menu">
    <div class="mega-col">
        <RouterLink to="/accessories/bags">
        <h4>BAGS & BACKPACKS</h4>
      </RouterLink>  
      <RouterLink to="/accessories/duffel-bags">Duffel Bags</RouterLink>
      <RouterLink to="/accessories/gym-backpacks">Gym Backpacks</RouterLink>
      <RouterLink to="/accessories/fanny-packs">Fanny Packs</RouterLink>
    </div>

    <div class="mega-col">
        <RouterLink to="/accessories/hats">
        <h4>HATS & HEADWEAR</h4>
      </RouterLink>  
      <RouterLink to="/accessories/caps">Caps</RouterLink>
      <RouterLink to="/accessories/beanies">Beanies</RouterLink>
      <RouterLink to="/accessories/headbands">Headbands</RouterLink>
    </div>

    <div class="mega-col">
    <RouterLink to="/accessories/drinkware">
        <h4>DRINKWARE</h4>
      </RouterLink>  
      <RouterLink to="/accessories/water-bottles">Water Bottles</RouterLink>
      <RouterLink to="/accessories/shakers">Shakers</RouterLink>
      <RouterLink to="/accessories/ice-mugs">Ice Mugs</RouterLink>
    </div>

    <div class="mega-col">
    <RouterLink to="/accessories/sale">
        <h4>ACCESSORIES SALE</h4>
      </RouterLink>  
      <RouterLink to="/accessories/sale-10">10% OFF</RouterLink>
      <RouterLink to="/accessories/sale-25">25% OFF</RouterLink>
      <RouterLink to="/accessories/sale-50">50% OFF</RouterLink>
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
