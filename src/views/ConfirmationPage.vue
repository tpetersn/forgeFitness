<template>
  <div class="confirmation-box">
    <h2>THANK YOU FOR SHOPPING WITH FORGE FITNESS!</h2>
    <div class="container py-5 text-center">
    
    <p class="lead">A confirmation email has been sent to:</p>
    <p><strong>{{ order.email }}</strong></p>

    <p class="mt-4">Order for:</p>
    <p class="fw-bold">{{ order.fullName }}</p>

    <p class="mt-2">Shipping to:</p>
    <p>{{ order.addressLine }}</p>

  </div>

    <p class="comment-title">PLEASE LEAVE A COMMENT ABOUT YOUR EXPERIENCE<br />WITH FORGE FITNESS</p>

    <textarea v-model="comment" placeholder="TYPE HERE..."></textarea>

    <button class="submit-btn" @click="submitComment">SUBMIT COMMENT</button>

    <RouterLink to="/" class="home-btn" @click="order.clear">
      RETURN TO HOMEPAGE
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useOrderStore } from '../stores/order.js'
const order = useOrderStore()
const comment = ref('')

function submitComment() {
  if (comment.value.trim()) {
    console.log('User comment:', comment.value)
    window.alert('Your comment has been submitted. Thank you for your feedback!')
    comment.value = ''
  }
}
</script>

<style scoped>
.confirmation-box {
  max-width: 80%;
  margin: 3rem auto ;
  text-align: center;
  border: 2px solid #aaa;
  padding: 2rem 4rem;
  background: #fff;
  margin-bottom: 10rem;
  
}

h2 {
  font-size: 1.5rem;
  font-weight: bolder;
  margin-bottom: 0.5rem;
  text-decoration: underline;
  text-shadow: 1px 1px #666;
}

.lead {
  margin-bottom: 1.5rem;
}

.comment-title {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

textarea {
  width: 100%;
  height: 100px;
  resize: none;
  padding: 1rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.submit-btn {
  display: block;
  width:70%;
  padding: 0.6rem;
  background: linear-gradient(to right, #999, #a4e2c6ab);
  color: #000;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin:0 auto 2rem;
}

.home-btn {
  display: inline-block;
  padding: 0.75rem 2rem;
  background: linear-gradient(to right, #666, #222);
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
}
</style>
