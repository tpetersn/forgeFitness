<template>
  <aside class="filter-sidebar">
    <h3>Filters</h3>

    <!-- Size -->
    <section class="filter-group">
      <h4>Size</h4>
      <label v-for="s in sizes" :key="s">
        <input type="checkbox" :value="s" v-model="draft.sizes" />
        {{ s }}
      </label>
    </section>

    <!-- Color -->
    <section class="filter-group">
      <h4>Color</h4>
      <label v-for="c in colors" :key="c">
        <input type="checkbox" :value="c" v-model="draft.colors" />
        {{ c }}
      </label>
    </section>

    <!-- Tags -->
    <section class="filter-group">
      <h4>Tags</h4>
      <label v-for="t in tags" :key="t">
        <input type="checkbox" :value="t" v-model="draft.tags" />
        {{ t }}
      </label>
    </section>

    <!-- Sort -->
    <section class="filter-group">
      <h4>Sort by Price</h4>
      <select v-model="draft.sort">
        <option value="">None</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>
    </section>

    <button class="apply-btn" @click="emit('apply', { ...draft })">
      Apply Filters
    </button>
  </aside>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

/* constant lists – tweak as you add products */
const sizes  = ['XS','S','M','L','XL','XXL']
const colors = ['Black','Blue','White','Red','Gray','Green']
const tags   = ['sale','new','popular','bestseller','premium']

/* store local (draft) selections until user clicks Apply */
const draft = reactive({
  sizes:  []  as string[],
  colors: []  as string[],
  tags:   []  as string[],
  sort:   ''  as '' | 'asc' | 'desc'
})

const emit = defineEmits<{
  apply: [ typeof draft ]
}>()
</script>

<style scoped>
.filter-sidebar {
  padding: 1.25rem 1rem 2rem;
  border-right: 1px solid #ccc;
  background:#fafafa;
  display:flex;
  flex-direction:column;
  gap:1rem;
  position:sticky;   
       
}
.filter-sidebar h3 {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
    margin: 0 0 1rem;
    text-align: center;
}
.filter-group {
    border-bottom: 1px solid #ccc;
}

.filter-group h4 {
    margin: 0 0 .3rem;
    font-size:1rem;
}
.filter-group label {
    display:block;
    margin: .25rem 0;
    font-size:.9rem;
}
select {
    width:100%;
    padding:.3rem;
}
.apply-btn {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background: black;
  color: white;
  font-weight: bold;
  width: 100%;
  border: none;
  cursor: pointer;
  border-radius: 22px;
}
.apply-btn:hover {
    background:#222;
    cursor:pointer
}
</style>
