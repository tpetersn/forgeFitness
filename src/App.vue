<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue';
import Navbar from './components/Navbar.vue';
import CartSideBar from './components/CartSideBar.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <Navbar />
  <RouterView />
  <CartSideBar />
  <Footer />

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
