import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    lines: [],        // { productId, size, qty }
    isOpen: false
  }),
  getters: {
    count:  (s) => s.lines.reduce((t, l) => t + l.qty, 0),
    total:  (s) => s.lines.reduce((sum, l) => sum + l.price * l.qty, 0),
    isEmpty:(s) => s.lines.length === 0
  },
  actions: {
    add(productId, size, price) {
      const existing = this.lines.find(
        l => l.productId === productId && l.size === size
      )
      existing ? existing.qty++ : this.lines.push({ productId, size, qty: 1, price })
      this.isOpen = true
    },
    remove(index) { this.lines.splice(index, 1) },
    toggle()     { this.isOpen = !this.isOpen },
    clear()      { this.lines = [] }
  }
})
