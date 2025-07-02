import { defineStore } from 'pinia'
import catalog from '../data/catalog.js' 

export const useProductStore = defineStore('products', {
  state: () => ({
    all: catalog              
  }),
  getters: {
    byCategory: (s) => (cat) => s.all.filter(p => p.category === cat),
    saleItems:  (s) => s.all.filter(p => p.tags.includes('sale')),
    getById:    (s) => (id) => s.all.find(p => p.id === id)
  }
})
