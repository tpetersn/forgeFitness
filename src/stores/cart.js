import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    lines: [],        // { productId, ,name, size, qty }
    isOpen: false
  }),
  getters: {
    count:  (s) => s.lines.reduce((t, l) => t + l.qty, 0),
    total:  (s) => s.lines.reduce((sum, l) => sum + l.price * l.qty, 0),
    isEmpty:(s) => s.lines.length === 0
  },
actions: {
    /**
     * Add items to the cart.
     * @param {string} id       Product ID (catalog key)
     * @param {string} name     Product names
     * @param {string} size     Chosen size (e.g. 'M')
     * @param {number} price    Unit price
     * @param {number} qty      Quantity (defaults to 1)
     */
    add(id, name, size, price, qty = 1) {
      const existing = this.lines.find(
        (l) => l.productId === id && l.size === size
      )

      if (existing) {
        existing.qty += qty
      } else {
        this.lines.push({ productId: id, name, size, price, qty })
      }

      this.isOpen = true           // open sidebar whenever something’s added
    },

    remove(index) {
      this.lines.splice(index, 1)
    },

    toggle() {
      this.isOpen = !this.isOpen
    },

    clear() {
      this.lines = []
      this.isOpen = false          // close sidebar after clearing
    },
  }
})
