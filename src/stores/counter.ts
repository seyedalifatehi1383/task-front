import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const Autenticate = defineStore('counter', () => {
  const token = ref('Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0NmNiN2Q3LWYwZmQtNGUyMS04NDgwLWJjZWNkZDJiYzA5NSIsIm5hbWUiOiJzb21lb25lIiwiZW1haWwiOiJzb21lb25lQGdtYWlsLmNvbSIsImlhdCI6MTY5MzExNzAyMCwiZXhwIjoxNjkzMTM4NjIwfQ.BHxDtm8qvlx2tPnAfJK6Vd0yT8SFkf5KzYhI243CN3g')  
  
  return { token  }
})
