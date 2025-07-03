<template>
  <div class="mega-menu">
    <div class="mega-col">
      <RouterLink to="/women/tops">
        <h4>WOMEN’S TOPS</h4>
      </RouterLink>  
      <RouterLink to="/women/tops/t-shirts">T-Shirts</RouterLink>
      <RouterLink to="/women/tops/long-sleeve">Long Sleeve</RouterLink>
      <RouterLink to="/women/tops/tanks">Tanks</RouterLink>
      <RouterLink to="/women/tops/sweaters">Sweaters</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/women/bottoms">
        <h4>WOMEN’S BOTTOMS</h4>
      </RouterLink>    
      <RouterLink to="/women/bottoms/leggings">Leggings</RouterLink>
      <RouterLink to="/women/bottoms/shorts">Shorts</RouterLink>
      <RouterLink to="/women/bottoms/pants">Pants</RouterLink>
      <RouterLink to="/women/bottoms/skirts">Skirts</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/women/shoes">
        <h4>WOMEN’S SHOES</h4>
      </RouterLink>     
      <RouterLink to="/women/shoes/running-shoes">Running</RouterLink>
      <RouterLink to="/women/shoes/casual-shoes">Casual</RouterLink>
      <RouterLink to="/women/shoes/hiking-shoes">Hiking</RouterLink>
      <RouterLink to="/women/shoes/slip-on">Slip-On</RouterLink>
    </div>

    <div class="mega-col">
      <RouterLink to="/women/sale">
        <h4>WOMEN’S SALE</h4>
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
