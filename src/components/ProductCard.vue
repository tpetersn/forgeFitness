<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-img" />

    <!-- Add to cart overlay -->
    <div v-if="showPicker" class="picker" @click.stop>
      <header class="picker-header">
        <h4>Select Size</h4>
        <button class="close" @click="showPicker = false">×</button>
      </header>
      <!-- Size buttons -->
      <div class="chip-row">
        <button
          v-for="s in product.sizes"
          :key="s"
          :class="['chip', { active: s === selectedSize }]"
          @click="selectedSize = s"
        >
          {{ s }}
        </button>
      </div>

      <!-- Quantity -->
      <div class="qty-row">
        <label>Qty</label>
        <input type="number" min="1" v-model.number="qty" />
      </div>

      <!-- Actions -->
      <button class="confirm"
              :disabled="!selectedSize"
              @click="confirmAdd">
        Add to Cart
      </button>
      <button class="cancel" @click="showPicker = false">Cancel</button>
    </div>

    <div class="product-info">
      <strong>{{ product.name }}</strong>

      <div class="sizes">
        <span>Sizes - </span>
        <span v-for="s in product.sizes" :key="s">{{ s }}</span>
      </div>

      <div class="price-add">
        <span class="price">${{ product.price }}</span>
        <button class="add-btn" @click="handleAdd">+</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* ---------- props ---------- */
const props = defineProps<{
  product: {
    id: string
    name: string
    sizes: string[]
    price: number
    image: string
    tags?: string[]
  }
}>()

/* ---------- emits ---------- */
const emit = defineEmits<{
  (e: 'add-to-cart', payload: {
    id: string
    name: string
    size: string
    qty: number
    price: number
  }): void
}>()

/* ---------- local state ---------- */
const showPicker = ref(false)
const selectedSize = ref<string | null>(null)
const qty = ref(1)  

// handlers
function handleAdd () {
  selectedSize.value = null
  qty.value          = 1
  showPicker.value   = true
}
function confirmAdd () {
  if (!selectedSize.value) return
  emit('add-to-cart', {
    id:    props.product.id,
    name:  props.product.name,
    size:  selectedSize.value,
    qty:   qty.value,
    price: props.product.price
  })
  showPicker.value = false
}

</script>


<style scoped>
.product-card {
  position: relative;
  width: 200px;
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  font-size: 0.9rem;
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background-color: white;
}

.product-info {
  padding: 0.5rem;
}

.sizes span {
  margin-right: 0.5rem;
}

.price-add {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
}

.price {
  font-weight: bold;
}

.add-btn {
  font-weight: bold;
  font-size: 1.2rem;
  background: none;
  border: none;
  cursor: pointer;
}

.picker { 
  position:absolute;
  top:140px;
  left:0;
  width:100%;
  background:#f0f0f0;
  border:2px solid #000;
  padding:.5rem;
  z-index:2;
}

.picker-header {
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:.4rem;
}

.close {
  background:none;
  border:none;
  font-size:1.2rem;
  cursor:pointer;
}

.chip-row {
  display:flex;
  gap:.4rem;
  flex-wrap:wrap;
  margin-bottom:.5rem;
}

.chip {
  border:2px solid #000;
  background:#fff;
  padding:2px 8px;
  cursor:pointer;
  font-weight:600;
  font-size:.8rem;
}
.chip.active {
  background:#74a9d8;
  color:#fff;
}

.qty-row {
  display:flex;
  align-items:center;
  gap:.5rem;
  margin-bottom:.6rem;
}

.qty-row input {
  width:50px;
  padding:2px;
}


.confirm {
  width:100%;
  padding:4px 0;
  margin-bottom:.4rem;
  background:#000;
  color:#fff;
  border:none;
  cursor:pointer;
  font-weight:700;
}

.confirm:disabled {
  opacity:.5;
  cursor:default;
}

.cancel {
  width:100%;
  padding:4px 0;
  background:#b4b4b4;
  border:none;
  cursor:pointer;
}

</style>
