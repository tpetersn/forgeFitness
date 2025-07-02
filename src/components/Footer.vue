<template>
  <footer class="ff-footer">
    <!-- Left column – copy + social icons -->
    <div class="footer-left">
      <h2 class="brand">FORGE FITNESS</h2>

      <p>Email: <a href="mailto:contact@forgefitness.ca">contact@forgefitness.ca</a></p>
      <p>Phone: 1-613-123-0011</p>

      <!-- SVG placeholders – add your icons later -->
      <div class="social-icons">
        <!-- e.g. <FacebookIcon /> <InstagramIcon /> -->
      </div>
    </div>

    <!-- Right column – logo -->
    <div class="footer-right">
      <img :src="logo" alt="Forge Fitness logo" />
    </div>
  </footer>
</template>

<script setup>
import logo from '/src/assets/logo.png';     
</script>

<style scoped>
/* ---------- Wrapper ---------- */
.ff-footer {
  position: relative;                
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 1rem 1.5rem;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  color: #000;
  overflow: hidden;   
    width: 100vw;
  margin-left: calc(-50vw + 50%);                
}

/* Pseudo-element for faded bg image */
.ff-footer::before {
  content: "";
  position: absolute;
  inset: 0;                           /* full cover */
  background: url('/src/assets/bg.png') center / cover no-repeat;
  opacity: 0.35;                      /* <-- control opacity here */
  z-index: -1;                        /* place behind content */
}

/* ---------- Left column ---------- */
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1 1 auto;
}

.brand {
  /* same heavy style used on ordering page */
  font-family: "Impact", "Arial Black", sans-serif;
  font-size: 2rem;
  font-weight: 900;                   /* extra bold */
  letter-spacing: 0.04em;
  margin: 0 0 0.4rem;
  text-transform: uppercase;
}

.footer-left a {
  color: inherit;
  text-decoration: none;
}

.social-icons {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.6rem;
  min-height: 24px;                   /* keeps row height before icons load */
}

/* ---------- Right column ---------- */
.footer-right img {
  width: 180px;                       /* tweak to taste */
  height: auto;
}

/* ---------- Responsive tweaks ---------- */
@media (max-width: 575.98px) {
  .ff-footer {
    flex-direction: column;
    text-align: center;
  }
  .footer-right { margin-top: 0.75rem; }
}
</style>
