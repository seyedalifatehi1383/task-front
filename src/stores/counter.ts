import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Autenticate = defineStore('counter', () => {
  const token = ref('')  
  function catche(data : any) {
    localStorage.setItem('chatch' , JSON.stringify(data))
  }
  return { token }
})
