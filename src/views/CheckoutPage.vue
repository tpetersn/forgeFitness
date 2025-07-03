<template>
  <div class="checkout-page py-4 px-3 px-md-4">
    <!-- header -->
    <header class="d-flex justify-content-between align-items-end mb-4">
      <RouterLink to="/" class="h3 m-0 text-dark fw-bold ff-logo">FORGE FITNESS</RouterLink>
      <h5 class="m-0 fw-bold">CHECKOUT</h5>
    </header>

    <div class="row g-4">
      <!-- LEFT column -->
      <div class="col-12 col-lg-8">
        <!-- CONTACT -->
        <section class="mb-4">
          <h6 class="fw-bold border-bottom pb-1">CONTACT INFO</h6>
          <input v-model.trim="form.email"  class="form-control mb-2" type="email" placeholder="Email" />
          <input v-model.trim="form.phone"  class="form-control"      type="tel"   placeholder="Phone" />
        </section>

        <!-- DELIVERY -->
        <section class="mb-4">
          <h6 class="fw-bold border-bottom pb-1">DELIVERY INFO</h6>
          <input v-model.trim="form.fullName" class="form-control mb-2" placeholder="Full Name" />
          <select v-model="form.country" class="form-select mb-2">
            <option disabled value="">Country</option>
            <option>Canada</option><option>United States</option>
          </select>
          <input v-model.trim="form.address" class="form-control mb-2" placeholder="Address" />
          <div class="d-flex gap-2">
            <input v-model.trim="form.city"       class="form-control" placeholder="City" />
            <input v-model.trim="form.province"   class="form-control" placeholder="Province" />
            <input v-model.trim="form.postal"     class="form-control" placeholder="Postal Code" />
          </div>
        </section>

        <!-- PAYMENT -->
        <section>
          <h6 class="fw-bold border-bottom pb-1">PAYMENT INFO</h6>
          <input v-model.trim="form.cardNumber" class="form-control mb-2" placeholder="Card Number" />
          <div class="d-flex gap-2 mb-2">
            <input v-model.trim="form.exp" class="form-control" placeholder="EXP Date (MM / YY)" />
            <input v-model.trim="form.svc" class="form-control" placeholder="SVC" />
          </div>
          <input v-model.trim="form.cardName" class="form-control" placeholder="Full Name" />
        </section>

        <!-- ORDER NOW -->
        <button
          class="btn btn-dark w-100 mt-4"
          :disabled="!allFilled || cart.isEmpty"
          @click="placeOrder"
        >
          ORDER NOW
        </button>
      </div>

      <!-- RIGHT column -->
      <div class="col-12 col-lg-4">
        <div class="border p-3">
          <h6 class="fw-bold border-bottom pb-1">ORDER DETAILS</h6>
          <ul class="list-unstyled small mb-3">
            <li v-for="(item,i) in cart.lines" :key="i"
                class="d-flex justify-content-between">
              <span>-{{ item.name }} x{{ item.qty }}</span>
              <span>{{ money(item.price * item.qty) }}</span>
            </li>
          </ul>
          <div class="d-flex justify-content-between fw-bold border-top pt-2">
            <span>Your Total</span>
            <span>{{ money(cart.total) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart.js'
import { useOrderStore } from '../stores/order.js'

const cart   = useCartStore()
const router = useRouter()
const order = useOrderStore()

/* ---- reactive form object ---- */
const form = reactive({
  email:'', phone:'',
  fullName:'', country:'', address:'',
  city:'', province:'', postal:'',
  cardNumber:'', exp:'', svc:'', cardName:''
})

/* ---- helper ---- */
const money = (n:number) => `$${n.toFixed(2)}`

/* ---- validation ---- */
const allFilled = computed(() =>
  Object.values(form).every(v => String(v).trim() !== '')
)

/* ---- place order ---- */
function placeOrder() {
  cart.clear()
  router.push('/confirmation')
  order.save({
    email: form.email,
    fullName: form.fullName,
    address: `${form.address}, ${form.city}, ${form.province} ${form.postal}`
  })
}

</script>

<style scoped>
.ff-logo{
  text-decoration:none;
  letter-spacing:2px
}
</style>
