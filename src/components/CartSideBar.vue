<template>
  <Teleport to="body">
    <transition name="slide">
      <aside v-if="isOpen" class="cart-panel" @click.self="cart.toggle">
        <div class="cart-box">
          <header>
            <h3>Your Cart</h3>
            <button class="close" @click="cart.toggle">×</button>
          </header>

          <!-- EMPTY STATE -->
          <template v-if="cart.isEmpty">
            <p class="empty">You have no items in your cart</p>
            <br> <p class="shop">Browse our sections today!</p>
            <div class="btn-col">
              <RouterLink to="/men" class="empty-btn" @click="cart.toggle">Shop Men’s</RouterLink>
              <RouterLink to="/women" class="empty-btn" @click="cart.toggle">Shop Women’s</RouterLink>
              <RouterLink to="/sale" class="empty-btn" @click="cart.toggle">Shop Sales</RouterLink>
            </div>
          </template>

          <!-- FILLED STATE -->
          <template v-else>
            <ul class="item-list">
              <li v-for="(item, i) in cart.lines" :key="i">
                <span> {{ item.name}} ({{ item.size }}) x {{ item.qty }}</span>
                <span class="price">${{ (item.price * item.qty).toFixed(2) }}</span>
                <button class ="remove" @click="cart.remove(i)">x</button>
              </li>
            </ul>

            <div class="total">
              <span>Your Total</span>
              <span>${{ cart.total.toFixed(2) }}</span>
            </div>
            <RouterLink to="/checkout" class="checkout" @click="cart.toggle">Checkout</RouterLink>
          </template>
        </div>
      </aside>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'
import {computed } from 'vue'
import { useProductStore } from '../stores/products.js'
const cart = useCartStore()
const isOpen = computed(() => cart.isOpen)
</script>

<style scoped>
/* ----- slide in/out animation ----- */
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-active, .slide-leave-active {
  transition: transform 0.25s ease;
}

/* ----- panel container ----- */
.cart-panel {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);          /* dark overlay */
  z-index: 999;
  display: flex;
  justify-content: flex-end;
}

/* ----- white box ----- */
.cart-box {
  width: 425px;
  max-width: 100vw;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 8px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
}



header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
}
h3   {
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: underline;
}
.close {
  background:none;
  border:none;
  font-size:1.5rem;
}

.empty {
  padding: 1rem; 
  margin-bottom: -1rem;
  text-align: center;
  font-style: italic;
  font-size: 1.25rem;
  font-weight: bold;
}
.shop {
  padding: 1rem; 
  margin-bottom: 4rem;
  text-align: center;
  font-style: italic;
  font-size: 1.1rem;

}

.btn-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  align-items: center;
}
.empty-btn  {
  display:block;
  text-align:center;
  padding: 0.5rem 0;
  background:#68707d;
  color:#fff;
  text-decoration:none;
  border-radius:22px;
  width: 75%;
}

.item-list {
  flex:1;
  overflow:auto;
  padding:0.5rem 1rem;
  list-style:none;
}
.item-list li {
  display:flex;
  justify-content:space-between;
  margin-bottom:0.5rem;
}

.total {
  display:flex;
  justify-content:space-between;
  padding: 0.75rem 1rem;
  font-weight:700;
  border-top:1px solid #ccc;
}

.checkout {
  margin: 0.75rem 1rem 1rem;
  display:block;
  text-align:center;
  padding:0.6rem 0;
  background:#000;
  color:#fff;
  text-decoration:none;
  border-radius:4px;
}
.remove {
  background-color: grey;
  border-radius: 5px;
}
.item-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.price {
  font-weight: bold;
  margin-right: -8rem;
}

</style>
