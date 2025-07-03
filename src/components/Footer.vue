<template>
  <footer class="ff-footer">
    <!-- Left column – copy + social icons -->
    <div class="footer-left">
      <h2 class="brand">FORGE FITNESS</h2>

      <p>contact@forgefitness.ca</p>
      <p>1-613-123-0011</p>
      <p>Follow us on Social Media</p>

      <!-- SVG placeholders – add your icons later -->
      <div class="social-icons">
        <!-- e.g. <FacebookIcon /> <InstagramIcon /> -->
         <InstagramIcon />
         <FacebookIcon />
         <XIcon />
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
import InstagramIcon from '/src/assets/icons/instagram.vue';  
import FacebookIcon from '/src/assets/icons/facebook.vue'; 
import XIcon from '/src/assets/icons/twitter.vue';
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
  inset: 0;                           
  background: url('/src/assets/bg.png') center / cover no-repeat;
  opacity: 0.35;                      
  z-index: -1;                        
}

/* ---------- Left column ---------- */
.footer-left {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1 1 auto;
}
.footer-left p {
  margin-bottom: 0.5rem;
  font-weight: 400;
}

.brand {
  font-family: "Impact", "Arial Black", sans-serif;
  font-size: 2rem;
  font-weight: 900;                 
  letter-spacing: 0.04em;
  margin: 0 0 1.8rem;
  text-transform: uppercase;
  margin-top: 1rem;
}


.social-icons {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.6rem;
  min-height: 24px;                   /* keeps row height before icons load */
}

/* ---------- Right column ---------- */
.footer-right img {
  width: 180px;                       
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
