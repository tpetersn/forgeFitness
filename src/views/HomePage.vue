c<template>
  <div>
    <section class="workout d-flex flex-column flex-md-row">
      <!-- Left: full‑bleed image -->
      <div class="workout-img flex-fill">
        <img :src="workoutImage" alt="Workout with dumbbells" />
      </div>

      <!-- Right: copy & CTAs -->
      <div class="workout-copy flex-fill d-flex flex-column justify-content-center p-4 p-lg-5">
        <h1 class="display-5 fw-bold lh-1 mb-4">
          SHOP OUR<br />BRAND NEW<br />ATHLETIC CLOTHING<br />AND ACCESSORIES
        </h1>
        <div>
          <router-link to="/men" class="btn btn-outline-dark me-3 mb-sm-3">SHOP MEN'S</router-link>
          <router-link to="/women" class="btn btn-outline-dark">SHOP WOMEN'S</router-link>
        </div>
      </div>
    </section>

    <section class="banner position-relative text-center py-5">
      <div class="bg-image" :style="`background-image: url('${bgImage}')`"></div>

      <!-- foreground content -->
      <div class="banner-box position-relative bg-white bg-opacity-90 rounded-3 mx-auto p-4 p-lg-5 shadow">
        <h2 class="fw-bold fst-italic mb-2">It’s summer time. Time to get active.</h2>
        <p class="lead mb-4">Shop our sale section now!</p>
        <router-link to="/sale" class="btn btn-secondary btn-lg">Summer Sales</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// hero image import (place your image in src/assets and adjust the name if needed)
import workoutImage from '/src/assets/workout.png'
import logoImage from '/src/assets/logo.png'
import bgImage from '/src/assets/bg.png'
</script>

<style scoped>


.workout {
    min-height: 520px;
}
.workout-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.workout-copy h1 {
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

/* ---------- CTA banner ---------- */
.banner {
    overflow: hidden;
    height: 300px;
}
.bg-image {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    z-index: 1;
}
.banner-box {
    position: relative;
    z-index: 2 ;
    width: 90%;
    max-width: 680px;
    padding: 1.25rem 2rem;
    background: rgba(255,255,255,0.95);
    border-radius: 0.6rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
.banner-box h2 {
    font-size: 1.6rem;         /* ≈ 25px */
    line-height: 1.25;
    font-style: italic;
    font-weight: 700;
    margin-bottom: .4rem;
    white-space: nowrap;       /* keeps it on one line until mobile */
}

.banner-box p {
    font-size: 1.05rem;
    margin-bottom: .9rem;
}

.btn {
  border-radius: rem;
  padding: .45rem 1.6rem;
}

.btn-outline-dark{
    background: #8e939b;
    border: none; 
    color: #ffffff; 
}
.btn-outline-dark:hover,
.btn-outline-dark:focus{
    background: #7b7f86;
    color: #ffffff; 
}

.btn-secondary{
    background: #8e939b;
    border: none; 
}
.btn-secondary:hover,
.btn-secondary:focus {
    background: #7b7f86; 
}

@media (max-width: 600px) {
  .banner {
    height: auto;            /* let it grow */
    padding: 2rem 0;
  }
  .banner-box h2 {
    font-size: 1.3rem;
    white-space: normal;     /* allow wrapping on phones */
  }
}

</style>