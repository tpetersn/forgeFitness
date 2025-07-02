import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    email: '',
    fullName: '',
    addressLine: '',
  }),
  actions: {
    save(info) {
      this.email       = info.email
      this.fullName    = info.fullName
      this.addressLine = info.address
    },
    clear() {
      this.$reset()
    },
  },
})
