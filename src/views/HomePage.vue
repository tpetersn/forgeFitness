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
      <div class="sw-image" :style="`background-image: url('${swImage}')`"></div>

      <!-- foreground content -->
      <div class="banner-box position-relative bg-white bg-opacity-90 rounded-3 mx-auto p-4 p-lg-5 shadow">
        <h2 class="fw-bold fst-italic mb-2">It’s summer time. Time to get active!</h2>
        <p class="lead mb-4">Shop our sale section now!</p>
        <router-link to="/sale" class="btn btn-secondary btn-lg">Summer Sales</router-link>
      </div>
      
    </section>

    <section class="feature-grid container-fluid mt-4">

      <!-- Gym equipment tile -->
      <div class="feature-card">
        <div class="feature-copy text-center">
          <h3>Shop our gym equipment!</h3>
          <p class="small mb-3">
            With lots of at-home equipment, <br />
            great to get your summer sweat on!
          </p>
          <router-link to="/equipment" class="btn btn-outline-dark">GYM EQUIPMENT</router-link>
        </div>
        <div class="feature-img">
          <img :src="image1" alt="Kettlebell" />
        </div>
        
      </div>

      <!-- Water bottles tile -->
      <div class="feature-card">
        <div class="feature-img">
          <img :src="image2" alt="Water bottle" />
        </div>
        <div class="feature-copy text-center">
          <h3>Shop our wide range of water bottles</h3>
          <p class="small mb-3">
            So you stay hydrated on those hot days!
          </p>
          <router-link to="/hydration" class="btn btn-outline-dark">WATER BOTTLES</router-link>
        </div>
      </div>

    </section>

  </div>
</template>

<script setup>
import Footer from '../components/Footer.vue'
import workoutImage from '/src/assets/workout.png'
import logoImage from '/src/assets/logo.png'
import swImage from '/src/assets/summer-workout.png'
import image1 from '/src/assets/dumbbell.png'
import image2 from '/src/assets/hydrated.png'
</script>

<style scoped>


.workout {
    min-height: 520px;
    margin-top: 0.5rem;
}
.workout-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    border: 0.5px solid #000000;
}
.workout-copy h1 {
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

/* ---------- CTA banner ---------- */
.banner {
    overflow: hidden;
    height: 500px;
    margin-top: 1rem;
}
.sw-image {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    z-index: 1;
    border: 0.5px solid #000000;
    border-radius: 5px;
}
.banner-box {
    position: relative;
    z-index: 2 ;
    width: 90%;
    max-width: 680px;
    padding: 1.25rem 2rem;
    background: rgba(255,255,255,0.95);
    border-radius: 0.8rem;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    border: 2px solid #000000;
    margin-top: 2rem;
}
.banner-box h2 {
    font-size: 1.6rem;     
    line-height: 1.25;
    font-style: italic;
    font-weight: 700;
    margin-bottom: .4rem;
    white-space: nowrap;       
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
    background: #7A7E87;
    border: none; 
    color: #ffffff; 
}
.btn-outline-dark:hover,
.btn-outline-dark:focus{
    background: #7b7f86;
    color: #ffffff; 
}

.btn-secondary{
    background:  #F1260E;
    border: none; 
}
.btn-secondary:hover,
.btn-secondary:focus {
    background: #ee220bb9; 
}


/* ---------- Feature grid ---------- */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin-bottom: 1rem;
}

.feature-card {
  border: 1px solid #c9c9c9;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.feature-img img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.feature-copy {
  padding: 1rem;
  flex: 1 1 auto;
}

.feature-copy h3 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

/* keep buttons full-width on mobile */
@media (max-width: 575.98px) {
  .feature-copy .btn { width: 100%; }
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