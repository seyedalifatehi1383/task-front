import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Autenticate = defineStore('counter', () => {
  const token = ref('')  
  
  return { token  }
})
