<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Autenticate } from "../stores/counter";
const Autent = Autenticate()
let restualt :any
let tasks = ref([])

onMounted(async () => {
     restualt = await fetch('http://localhost:3000/myTasks' , {headers : {'Authorization' : 'Bearer ' + Autent.token }})
     
     
  });
</script>

<template>
<h1>{{ restualt }}</h1>

</template>

<style>

</style>