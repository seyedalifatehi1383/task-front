import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Autenticate = defineStore('counter', () => {
  const token = ref('')  
  function setcatche(data : string) {
    localStorage.setItem('chatch' , JSON.stringify(data))    
  }
  function getchatch() :string {
    if (localStorage.getItem('chatch') == null) {
      return localStorage.getItem('chatch')
    } else {
    }
    return 'dont find'
  }
  return { token , setcatche,getchatch }
})
